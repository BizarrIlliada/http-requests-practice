import axios from 'axios';

const SURVEYS_URL = 'https://http-requests-practice-d4f8e-default-rtdb.europe-west1.firebasedatabase.app/surveys.json';

export async function getSurveysData() {
  const surveys = [];

  try {
    const responseData = (await axios.get(SURVEYS_URL)).data;
    
    for (const key in responseData) {
      surveys.push({
        id: key,
        name: responseData[key].name,
        rating: responseData[key].rating,
      })
    }
  
    return surveys;
  } catch (error) {
    throw new Error(error);
  }
}

export function addSurveyData(payload) {
  try {
    axios.post(SURVEYS_URL, payload);
  } catch (error) {
    throw new Error(error);
  }
}
