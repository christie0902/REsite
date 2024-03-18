export default function reducer(state, action) {

  const sumProducts = (cart) => {
    if (cart.length === 0) {
      return 0;
    }
   return( 
    cart.reduce((accumulator, item) => {
        return parseFloat(
          (
            Number(accumulator) + Number(item.price * item.quantity)
          ).toFixed(2)
        );
      }, 0))
      
  }

  switch (action.type) {
    // CART ----------------------------------------------------------
    case "product/cart-add":

      if (state.cart.some((item) => item.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart.map((item) => {           
             return { ...item, quantity: item.quantity + 1 }
          }
          ),
         total: sumProducts(state.cart)
         
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
          total: sumProducts([...state.cart, { ...action.payload, quantity: 1 }])
        };
       
      }

      case "product/cart-setQuantity":
        return {
          ...state,
          cart: [...state.cart].toSpliced(state.cart.findIndex((item) => item.id === action.payload.id), 1, {
            ...state.cart[state.cart.findIndex((item) => item.id === action.payload.id)],
            quantity: action.payload.quantity
          }),
          total: sumProducts([...state.cart].toSpliced(state.cart.findIndex((item) => item.id === action.payload.id), 1, {
            ...state.cart[state.cart.findIndex((item) => item.id === action.payload.id)],
            quantity: action.payload.quantity
          }))
        };

    case "product/cart-remove":
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload),
        total: sumProducts( state.cart.filter((product) => product.id !== action.payload))
      };

    case "product/cart-clear":
      return {
        ...state,
        cart: [],
        total: 0
      };

    case "product/set-cartVisibility":
      return {
        ...state,
        cartActive: action.payload,
      };

    case "product/toggle-cartVisibility":
      return {
        ...state,
        cartActive: !state.cartActive,
      };

    // PROFILE ------------------------------------------------------

    case "profile/set-profileVisibility":
      return {
        ...state,
        searchActive: action.payload,
      };

    case "profile/toggle-profileVisibility":
      return {
        ...state,
        profileActive: !state.profileActive,
      };

    // SEARCH --------------------------------------------------------

    case "search/set-searchVisibility":
      return {
        ...state,
        searchActive: action.payload,
      };

    case "search/toggle-searchVisibility":
      return {
        ...state,
        searchActive: !state.searchActive,
      };

    // CUSTOMIZER ----------------------------------------------------

    case "customizer/toggle-intro":
      return {
        ...state,
        customizerState: {
          ...state.customizerState,
          intro: !state.customizerState.intro,
        },
      };

    case "customizer/set-intro":
      return {
        ...state,
        customizerState: {
          ...state.customizerState,
          intro: action.payload,
        },
      };

    case "customizer/change-color":
      return {
        ...state,
        customizerState: {
          ...state.customizerState,
          color: action.payload,
        },
      };

    case "customizer/set-isLogo":
      return {
        ...state,
        customizerState: {
          ...state.customizerState,
          isLogoTexture: action.payload,
        },
      };

    case "customizer/set-isFull":
      return {
        ...state,
        customizerState: {
          ...state.customizerState,
          isFullTexture: action.payload,
        },
      };

    case "customizer/set-defaultTextures":
      return {
        ...state,
        customizerState: {
          ...state.customizerState,
          isFullTexture: false,
          isLogoTexture: true,
        },
      };

    case "customizer/set-logoDecal":
      return {
        ...state,
        customizerState: {
          ...state.customizerState,
          logoDecal: action.payload,
        },
      };

    case "customizer/set-fullDecal":
      return {
        ...state,
        customizerState: {
          ...state.customizerState,
          fullDecal: action.payload,
        },
      };

    case "customizer/set-KeyVal":
      return {
        ...state,
        customizerState: {
          ...state.customizerState,
          [action.payload.key]: action.payload.val,
        },
      };

    case "product/set-searchResults":
      return {
        ...state,
        searchResults: action.payload
      }
    case "product/clearSearchResults":
      return {
        ...state,
        searchResults: null
      }
    case "products/setSearchQuery":
      return {
        ...state,
        searchQuery: action.payload
      }
  }
  return state;
}
