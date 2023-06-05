import axios from 'axios';

async function fetchBookingData() {
  const API_KEY = '9e09bd3a5amsh36d707dbf729466p18da5ejsna8e5e2ce1f46';
  
  try {
    const response = await axios.get('https://booking-com.p.rapidapi.com/v1/hotels/get-deals', {
      params: {
        city_ids: '31115'
      },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export { fetchBookingData };
