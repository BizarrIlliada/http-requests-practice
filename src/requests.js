import axios from 'axios';

const SURVEYS_URL = 'https://http-requests-practice-d4f8e-default-rtdb.europe-west1.firebasedatabase.app/surveys.json';

export async function getSurveysData() {
  const surveys = [];

  try {
    const response = await axios.get(SURVEYS_URL);
    console.log(response);

    const responseData = response.data
    
    for (const key in responseData) {
      surveys.push({
        id: key,
        name: responseData[key].name,
        rating: responseData[key].rating,
      })
    }
  
    return surveys;
  } catch (error) {
    return error.message;
  }
}

export async function addSurveyData(payload) {
  try {
    await axios.post(SURVEYS_URL, payload);
  } catch (error) {
    return error.message;
  }
}
