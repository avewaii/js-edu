/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation( focus, knowsProgramming, config) {

    let hoursOfStudying = 800;
    let studentFocus = config[focus];

    if(knowsProgramming == true) {
      return Math.ceil(hoursOfStudying / studentFocus);
    } else {
      return Math.ceil((hoursOfStudying + 500) / config[focus]);
    }
  };