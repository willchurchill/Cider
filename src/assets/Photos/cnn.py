import tensorflow as tf

""" Get all images """
dataset_path = "../../deblurring/deblurring/data/40nice/"
image_width = 270
image_height = 90
batch_size = 20

# Load data
image_data = input_data.load_images(dataset_path, image_width,image_height)
batch_per_ep = len(image_data.imgs) // batch_size
if (len(image_data.imgs) == 0):
    e = 'No images were loaded - likely cause is wrong path: ' + dataset_path
    raise Exception(e)


""" Set up tensorboard_logs """
logs_directory = "logs"
# Logging
saver = tf.train.Saver()
files = glob.glob('%s/*' % logs_directory)
for f in files:
    os.remove(f)


""" Util Functions """
def conv2d(x, W, stride):
  """conv2d returns a 2d convolution layer with full stride."""
  return tf.nn.conv2d(x, W, strides=stride, padding='SAME')


def max_pool_2x2(x):
  """max_pool_2x2 downsamples a feature map by 2X."""
  return tf.nn.max_pool(x, ksize=[1, 2, 2, 1],
                        strides=[1, 2, 2, 1], padding='SAME')


def weight_variable(shape):
  """weight_variable generates a weight variable of a given shape."""
  initial = tf.truncated_normal(shape, stddev=0.1)
  return tf.Variable(initial)


def bias_variable(shape):
  """bias_variable generates a bias variable of a given shape."""
  initial = tf.constant(0.1, shape=shape)
  return tf.Variable(initial)


def createConv(layer, shape, stride):
  with tf.name_scope('conv1'):
    W_conv1 = weight_variable(shape)
    b_conv1 = bias_variable(shape[-1])
    h_conv1 = tf.nn.relu(conv2d(layer, W_conv1, stride) + b_conv1)
  return h_conv1

""" Input placeholders for original and blurred image """
original = tf.placeholder(tf.float32, (batch_size, image_height, image_width, 3))
original_greyscale = tf.reduce_mean(original, axis=3, keep_dims = True)
tf.summary.image('original_greyscale', original_greyscale, max_outputs=1)

# blurred image, input to the network
corrupted = tf.placeholder(tf.float32, (batch_size, image_height, image_width, 3))
corrupted_greyscale = tf.reduce_mean(corrupted, axis=3, keep_dims = True)
tf.summary.image('corrupted_greyscale', corrupted_greyscale, max_outputs=1)

""" Build the network """
# Layer 1
createConv(original)


def network(inputs):
    lay1 = createConv(inputs, [1, 270, 90, 64], stride)

helper = tf.Variable(1.0)
x = tf.Variable(helper, trainable=True)
tf.summary.scalar('x', x)
y = x*x*x + 4
tf.summary.scalar('y', y)

learning_rate = 1e-3

    # Loss function with L2 Regularization with beta=0.01
    # regularizers = tf.nn.l2_loss(weights_1) + tf.nn.l2_loss(weights_2)
    # loss = tf.reduce_mean(loss + beta * regularizers)

with tf.Session() as session:
    writer = tf.summary.FileWriter("logs", session.graph)
    merged = tf.summary.merge_all()
    # writer.add_graph(session.graph)

    global_step = tf.Variable(0, trainable=False)
    starter_learning_rate = 0.1
    N_steps_before_decay = 10
    decay_rate = 0.96
    learning_rate = tf.train.exponential_decay(starter_learning_rate, global_step,
                                               N_steps_before_decay, decay_rate, staircase=True)

    # AdamOptimizer could be used as a replacement for GradientDescent
    step = tf.train.AdamOptimizer(learning_rate).minimize(y, global_step=global_step)

    model =  tf.global_variables_initializer()
    session.run(model)
    for i in range(100):
        step.run(session=session)

        # add running time statistics
        run_options = tf.RunOptions(trace_level=tf.RunOptions.FULL_TRACE)
        run_metadata = tf.RunMetadata()
        summary = session.run(merged,
                              options=run_options,
                              run_metadata=run_metadata)
        writer.add_run_metadata(run_metadata, 'step%d' % i)
        writer.add_summary(summary, global_step=i)

        # writer.add_summary()
        print(session.run([x, y]))
