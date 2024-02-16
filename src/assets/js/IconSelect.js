import logoPhoneBlack from "../../assets/icon/phone.png";
import logoPhoneWhite from "../../assets/icon/phone_white.png";
import logoTrafficBlack from "../../assets/icon/traffic.png";
import logoTrafficWhite from "../../assets/icon/traffic_white.png";
import logoFoodBlack from "../../assets/icon/food.png";
import logoFoodWhite from "../../assets/icon/food_white.png";
import logoUtilityBlack from "../../assets/icon/utilities.png";
import logoUtilityWhite from "../../assets/icon/utilities_white.png";
import logoHospitalBlack from "../../assets/icon/hospital.png";
import logoHospitalWhite from "../../assets/icon/hospital_white.png";
import logoStudyBlack from "../../assets/icon/study.png";
import logoStudyWhite from "../../assets/icon/study_white.png";
import logoLeisureBlack from "../../assets/icon/leisure.png";
import logoLeisureWhite from "../../assets/icon/leisure_white.png";
import logoShoppingBlack from "../../assets/icon/shopping.png";
import logoShoppingWhite from "../../assets/icon/shopping_white.png";
import logoCultureBlack from "../../assets/icon/culture.png";
import logoCultureWhite from "../../assets/icon/culture_white.png";
import logoAirlineBlack from "../../assets/icon/airline.png";
import logoAirlineWhite from "../../assets/icon/airline_white.png";
import logoTravelBlack from "../../assets/icon/travel.png";
import logoTravelWhite from "../../assets/icon/travel_white.png";
import logoOilingBlack from "../../assets/icon/oiling.png";
import logoOilingWhite from "../../assets/icon/oiling_white.png";
import logoAllBlack from "../../assets/icon/maah_small_logo.png";
import logoAllWhite from "../../assets/icon/maah_small_logo_white.png";

export function selectIcon(category, color) {
  if (color === "black") {
    switch (category) {
      case "1":
        return logoAllBlack;
      case "2":
        return logoPhoneBlack;
      case "3":
        return logoTrafficBlack;
      case "4":
        return logoFoodBlack;
      case "5":
        return logoUtilityBlack;
      case "6":
        return logoHospitalBlack;
      case "7":
        return logoStudyBlack;
      case "8":
        return logoLeisureBlack;
      case "9":
        return logoShoppingBlack;
      case "10":
        return logoCultureBlack;
      case "11":
        return logoAirlineBlack;
      case "12":
        return logoTravelBlack;
      case "13":
        return logoOilingBlack;
      default:
        return logoAllBlack;
    }
  } else if (color === "white") {
    switch (category) {
      case "1":
        return logoAllWhite;
      case "2":
        return logoPhoneWhite;
      case "3":
        return logoTrafficWhite;
      case "4":
        return logoFoodWhite;
      case "5":
        return logoUtilityWhite;
      case "6":
        return logoHospitalWhite;
      case "7":
        return logoStudyWhite;
      case "8":
        return logoLeisureWhite;
      case "9":
        return logoShoppingWhite;
      case "10":
        return logoCultureWhite;
      case "11":
        return logoAirlineWhite;
      case "12":
        return logoTravelWhite;
      case "13":
        return logoOilingWhite;
      default:
        return logoAllWhite;
    }
  }
}
