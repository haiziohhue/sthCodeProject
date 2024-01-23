import numpy as np
from sklearn.linear_model import Lasso


def perform_lasso(x, y, alpha_value):
    lasso_reg = Lasso(alpha=alpha_value)
    lasso_reg.fit(x, y)
    return lasso_reg


x = np.array([[1, 2, 3], [1, 3, 5], [7, 3, 7]])
y = np.array([5, 6, 7])
a = 0.2
mod = perform_lasso(x, y, a)
preDV = mod.predict(x)
print(preDV)
