import { fetchPizzaById } from '../../api/pizza';

export const FETCH_PIZZA = 'FETCH_PIZZA';
export const FETCH_PIZZA_SUCCESS = 'FETCH_PIZZA_SUCCESS';
export const FETCH_PIZZA_FAILURE = 'FETCH_PIZZA_FAILURE';
export const COUNT_UP = 'COUNT_UP';
export const COUNT_DOWN = 'COUNT_DOWN';
export const ADD_CART = 'ADD_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const DELETE_CART = 'DELETE_CART';

export const UPDATE_COUNT = 'UPDATE_COUNT';
export const HANDLE_CLICK1 = 'HANDLE_CLICK1';
export const HANDLE_CLICK2 = 'HANDLE_CLICK2';
export const HANDLE_CLICK3 = 'HANDLE_CLICK3';
export const HANDLE_CLICK4 = 'HANDLE_CLICK4';
export const HANDLE_CLICK5 = 'HANDLE_CLICK5';
export const HANDLE_CLICK = 'HANDLE_CLICK';
export const ADD_CART_BUILDER = 'ADD_CART_BUILDER';

export const countUp = () => ({
  type: COUNT_UP,
});

export const countDown = () => ({
  type: COUNT_DOWN,
});

export const fetchPizza = () => ({
  type: FETCH_PIZZA,
});

export const fetchPizzaSuccess = (data) => ({
  type: FETCH_PIZZA_SUCCESS,
  data,
});

export const fetchPizzaFaliure = (errorMessage) => ({
  type: FETCH_PIZZA_FAILURE,
  errorMessage,
});

export const addCart = () => ({
  type: ADD_CART,
});

export const updateCart = (id, quantity) => ({
  type: UPDATE_CART,
  id,
  quantity,
});

export const deleteCart = (id) => ({
  type: DELETE_CART,
  id,
});

export const loadPizza = (id) => (dispatch) => {
  dispatch(fetchPizza());
  fetchPizzaById(id)
    .then((data) => {
      const pizzaName = data.PizzaName;
      const { id } = data;
      const pizzaPrice = data.UnitPrice;
      const pizzaDesc = data.Description;
      const pizzaImage = data.PizzaImage;

      dispatch(
        fetchPizzaSuccess({
          pizzaName,
          id,
          pizzaPrice,
          pizzaDesc,
          pizzaImage,
        }),
      );
    })
    .catch((error) => {
      dispatch(fetchPizzaFaliure(error.message));
    });
};

export const updateCount = () => ({
  type: UPDATE_COUNT,
});

export const handleClick1 = () => ({
  type: HANDLE_CLICK1,
});

export const handleClick2 = () => ({
  type: HANDLE_CLICK2,
});

export const handleClick3 = () => ({
  type: HANDLE_CLICK3,
});

export const handleClick4 = () => ({
  type: HANDLE_CLICK4,
});

export const handleClick5 = () => ({
  type: HANDLE_CLICK5,
});

export const handleClick = () => ({
  type: HANDLE_CLICK,
});

export const addCartBuilder = () => ({
  type: ADD_CART_BUILDER,
});
