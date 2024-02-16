import { useState } from "react";
import InputIncome from "../../components/CardApplication/InputIncome";
import PersonalCertification from "../../components/CardApplication/PersonalCertification";
import InputIDCard from "../../components/CardApplication/InputIDCard";
import InputCardApplicationInfo from "../../components/CardApplication/InputCardApplicationInfo";
import InputDestination from "../../components/CardApplication/InputDestination";
import { useLocation } from "react-router-dom";

function CardApplication() {
    const location = useLocation();
    const [process, setProcess] = useState(1);
    const [cardApply, setCardApply] = useState(
        {   
            card: location.state.card, // hi일 경우 이미지 코드 / by일 경우 카드 상품 코드
            type: location.state.type // type : hi or by
        });

    switch(process) {
        case 1:
            return <InputIncome setProcess={setProcess} setCardApply={setCardApply}></InputIncome>;
        case 2:
            return <PersonalCertification setProcess={setProcess} setCardApply={setCardApply}></PersonalCertification>;
        case 3:
            return <InputIDCard setProcess={setProcess} setCardApply={setCardApply}></InputIDCard>;
        case 4:
            return <InputCardApplicationInfo setProcess={setProcess} setCardApply={setCardApply} type={cardApply.type}></InputCardApplicationInfo>;
        case 5:
            return <InputDestination setProcess={setProcess} setCardApply={setCardApply} card={cardApply.card}></InputDestination>
        default:
            break;
    }
    
}

export default CardApplication;