import numpy as np
import matplotlib.pyplot as plt

x = np.array([(1,2,2),(3,4,5)])
y = np.array([(1,2,2),(3,4,5)])
# print(x+y)
# print(np.vstack((x,y)))
# print(np.hstack((x,y)))
# print(x.ravel())

# plotting
x= np.arange(0,3*np.pi,0.1)
y=np.sin(x)
plt.plot(x,y)
plt.show()

x= np.arange(0,3*np.pi,0.1)
y=np.tan(x)
plt.plot(x,y)
plt.show()