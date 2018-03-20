const initialState = {
  userProfile: {
    name: 'Captain Gates',
    location: 'São Paulo',
    skills: [
      {
        skill: 'Accounting',
        length: '7 Years'
      }
    ],
    languageSkills: [
      {
        language: 'English',
        proficiency: 'Native'
      },
      {
        language: 'French',
        proficiency: 'Professional working proficiency'
      }
    ],
    links: [
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/captain-gates'
      }
    ]
  }
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_PROFILE':
    return state;
  default:
    return state;
  }
};

export default userProfileReducer;
