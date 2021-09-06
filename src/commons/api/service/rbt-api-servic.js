class ApiRBTService {
  constructor() {
    // DEFINE API SELF KEYS
    Object.defineProperties(this, {
      _baseApiPath: {
        value: 'https://survivors-api.herokuapp.com/api',
      },

      _jwtToken: {
        value: '',
      },

      _baseParamObj: {
        value: '',
      },
    });

    //DEFINE API PROTOTYPE METHODS
    Object.defineProperties(ApiRBTService.prototype, {
      /** CLONE BASE FETCH PARAM OBJECT
       *
       * @name _cloneBaseParamObj
       *
       * @return {object} Cloned base param object
       */
      _cloneBaseParamObj: {
        value: () => {
          const baseParamObj = {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            // mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json;charset=utf-8',
              authorization: this.jwtToken,
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data), // body data type must match "Content-Type" header
          };

          return Object.assign({}, baseParamObj);
        },
      },

      /** DEFINE FETCH PARAM OBJECT
       *
       * @name _defineParamObject
       *
       * @param {object} settingObj - not null or undefined
       *
       * @return {object}
       */
       _defineParamObject: {
        value: async (settingObj = {}) => {
          let newParamObject = this._baseParamObj;
          console.log('qwqwqw');
      
          const keysInSettingObjects = Object.keys(settingObj);
      
          keysInSettingObjects.length !== 0 ? (newParamObject = Object.assign(this._cloneBaseParamObj(), settingObj)) : null;
      
          return newParamObject;
        },
      },

      /** GET RESOURCES PRIVATE COMMON FETCH REQUEST
       *
       * @name _getResources
       *
       * @param {string} url additional to base path string
       * @param {object} paramObj fetch param object
       *
       * @return {any} response result
       */
       _getResources: {
        value: async (url, paramObj) => {
          const res = await fetch(
            `${baseApiPath}${url}`,
            this._defineParamObject(paramObj)
          );
      
          if (!res.ok)
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
      
          return await res.json();
        },
      },

      /** SIGNIN SIGNUP PRIVATE BASE REQUEST
       *
       * @name _signUpSignInFetch
       *
       * @param {string} url additional to base path string
       * @param {string} email body email
       * @param {string} password body password
       *
       * @return {any} response result
       */
       _signUpSignInFetch: {
        value: async (url, email = 'test@gmail.com', password = '12345') => {
          const paramObj = {
            method: 'POST',
            body: {
              email: email,
              password: password,
            },
          };
      
          const response = await this._getResources(`${url}`, paramObj);
      
          const result = await response.json();
      
          return result;
        },
      },

       /** SIGNUP REQUEST
       *
       * @name signUp
       *
       * @param {string} email body email
       * @param {string} password body password
       * 
       * @return {any} response result
       */
        signUp: {
          value: async (email = 'test@gmail.com', password = '12345') => {
console.log('wewewe');
            const paramObj = this._defineParamObject();
            const result = await this._signUpSignInFetch('/auth/signup', paramObj);
        
            return result.message;
          },

          enumerable: true,
        },

        /** SIGNIN REQUEST
       *
       * @name signIn
       *
       * @param {string} email body email
       * @param {string} password body password
       * 
       * @return {any} response result
       */
         signIn: {
          value: async (email = 'test@gmail.com', password = '12345') => {
            const result = await this._signUpSignInFetch('/auth/signin', paramObj);
        
            return result.message;
          },

          enumerable: true,
        },

        /** LOGOUT REQUEST
       *
       * @name logOut
       * 
       * @return {string} response result
       */
         logOut: {
          value: async () => {
            const response = await this._getResources('/auth/logout');

            const result = await response.json();

            return result.message;
          },

          enumerable: true,
        },

       /** GET USER PROFILE DATA REQUEST
       *
       * @name getUserProfileData
       * 
       * @return {object} object with profile data of a signed user
       */
        getUserProfileData: {
          value: async () => {
            const response = await this._getResources('/user/profile');

            const result = await response.json();

            return result;
          },

          enumerable: true,
        },

        /**USER CHANGE PASSWORD REQUEST
       *
       * @name changeUserPassword
       * 
       * @return {string} object with profile data of a signed user
       */
         changeUserPassword: {
          value: async (password) => {
            const paramObj = {
              method: 'POST',
              body: {
                password,
              },
            };

            const response = await this._getResources('/user/change-password', paramObj);

            const result = await response.json();

            return result.message;
          },

          enumerable: true,
        },
    });
  }
}

const inst = new ApiRBTService();

const res = inst.signUp();
console.log('res!!!!!!!!!!!!!!!!!!',res);