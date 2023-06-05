import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  login: [],
  wishlist: [
    {
      address: 'Jln. Sentot Prawirodirjo No. 88, Jember 68131 Indonesia',
      description:
        'A modern Hotel committed to the highest international standards and a wide range of facilities to suit the needs of conference delegates, corporate business travelers and families on a joyful weekend trip. Aston Jember - Hotel & Conference Center is the first four star hotel in Jember that reflects the true element of style in modern and minimalis interiors.',
      hotel_class: '4.0',
      images: {
        large: {
          url: 'https://media-cdn.tripadvisor.com/media/photo-w/22/45/d2/3d/aston-jember-building.jpg',
        },
        original: {
          url: 'https://media-cdn.tripadvisor.com/media/photo-o/22/45/d2/3d/aston-jember-building.jpg',
        },
      },
      latitude: '-8.181418',
      location_id: '4427394',
      location_string: 'Jember, East Java, Java',
      longitude: '113.68712',
      name: 'Aston Jember Hotel & Conference Center',
      num_reviews: '478',
      price: 30,
      ranking: '#1 of 39 hotels in Jember',
      rating: '3.5',
    },
    {
      address: 'Jl. Karimata No.43, Jember 68121 Indonesia',
      description:
        'If you’re looking for a hotel in Jember, look no further than Meotel Jember.Close to Kampung JakCloth (2.2 mi), a popular Jember landmark, Meotel Jember is a great destination for tourists. In addition, while staying at Meotel Jember guests have access to room service, and you can stay connected with free wifi. You can also enjoy a pool and free breakfast while staying at Meotel Jember. Need a place to park? Free parking is available at Meotel Jember. Jember has plenty of seafood restaurants. So when you’re here, be sure to check out popular spots like Resto Legian and Resto Papuma, which are serving up some great dishes. There is no shortage of things to do in the area: explore popular architectural buildings such as Roudhotul Muchlisin Mosque. The staff at Meotel Jember looks forward to serving you during your upcoming visit.',
      hotel_class: '3.5',
      images: {
        large: {
          url: 'https://media-cdn.tripadvisor.com/media/photo-s/14/fb/94/a0/getlstd-property-photo.jpg',
        },
        original: {
          url: 'https://media-cdn.tripadvisor.com/media/photo-m/1280/14/fb/94/a0/getlstd-property-photo.jpg',
        },
      },
      latitude: '-8.176653',
      location_id: '15116208',
      location_string: 'Jember, East Java, Java',
      longitude: '113.71695',
      name: 'Meotel Jember by Dafam',
      num_reviews: '24',
      price: 20,
      ranking: '#2 of 39 hotels in Jember',
      rating: '4.5',
    },
  ],
  historyBook: [],
};

export const loginUser = createAsyncThunk('profile/loginUser', async ({ username, password, redirect, notFound }) => {
  try {
    if (username === 'hacktiv8' && password === 'ks05') {
      redirect(true);
      return { name: 'James Smith', email: 'jamessmith@gmail.com', phoneNumber: '02456982' };
    }
    notFound(true);
  } catch (error) {
    throw error(error);
  }
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: initialState,
  reducers: {
    unWishlist: (state, action) => {
      const exist = state.wishlist.find((item) => item.name === action.payload.name);
      if (exist) {
        state.wishlist = state.wishlist.filter((item) => item.name !== action.payload.name);
      }
    },
    wishlistAdded: (state, action) => {
      const exist = state.wishlist.find((item) => item.name === action.payload.name);
      if (!exist) {
        state.wishlist.push(action.payload);
      }
    },
    // changeProfile: (state, action) => {
    //   state.login = action.payload;
    // },
    // bookingAdded: (state, action) => {
    //   state.historyBook.push(action.payload);
    // },
    logout: (state, action) => {
      state.login = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.login = action.payload;
    });
  },
});

export const { logout,wishlistAdded, unWishlist } = profileSlice.actions;
export default profileSlice.reducer;
