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
            memberId: 'user1',
            card: location.state.card, // hi일 경우 이미지 코드 / by일 경우 카드 상품 코드
            type: location.state.type, // type : hi or by
            cardApplyMemberSocialNumber: "", // 주민번호
            cardApplyDate: "", // 신청일
            cardApplyIdIssueDate: "", // 발급일자
            cardApplyIsTermsOfService: location.state.applyIsTermsOfService, // 약관동의
            cardApplyAnnualIncome: "", // 연간소득
            cardApplyPaydate: "", // 이용대금 결제일
            cardApplyCreditPoint: "", // 신용점수
            cardApplySourceFund: "", // 자금원천
            cardApplyPurpose: "", // 목적
            cardApplyIsVerify: false, // 본인인증
            cardApplyEngname: "", // 영문이름
            cardApplyIsInternational: false, // 해외결제 여부
            cardApplyIsAccountVerify: false, // 계좌인증 여부
            cardApplyLimitAmount: null, // 한도
            cardApplyAddress: "", // 배송지
            cardApplyPassword: "", // 비밀번호
            cardApplyIsTransport: false // 교통카드
        });

    switch(process) {
        case 1:
            return <InputIncome setProcess={setProcess} setCardApply={setCardApply} cardApply={cardApply}></InputIncome>;
        case 2:
            return <PersonalCertification setProcess={setProcess} setCardApply={setCardApply} cardApply={cardApply}></PersonalCertification>;
        case 3:
            return <InputIDCard setProcess={setProcess} setCardApply={setCardApply} cardApply={cardApply}></InputIDCard>;
        case 4:
            return <InputCardApplicationInfo setProcess={setProcess} setCardApply={setCardApply} cardApply={cardApply} type={cardApply.type}></InputCardApplicationInfo>;
        case 5:
            return <InputDestination setProcess={setProcess} setCardApply={setCardApply} cardApply={cardApply} card={cardApply.card}></InputDestination>
        default:
            break;
    }
    
}

export default CardApplication;