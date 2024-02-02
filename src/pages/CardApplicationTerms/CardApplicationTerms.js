import styled from 'styled-components';
import close from '../../assets/images/close.png';

const ModalWrap = styled.div`
    background-color: rgba(0,0,0,0.3);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
`;

const ModalBody = styled.div`
    background-color: white;
    position: absolute;
    top: calc(50% - 400px);
    left: calc(50% - 450px);
    width: 800px;
    height: 700px;
    padding: 50px;
    border-radius: 20px;
`;

const ModalClose = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`;

const ModalTitle = styled.div`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin-bottom:30px;
`;

const ModalSubTitle = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin: 30px 0px 30px 0px;
`;

const ApplicationTerm = styled.div`
    font-size: 20px;
`;

function CardApplicationTerms(props) {
    const closeModal = () => {
        let modal = document.getElementById('cardApplicationTerms');
        modal.style.visibility = 'hidden';
    }
    
    return (
        <ModalWrap id='cardApplicationTerms'>
            <ModalBody>
                <ModalClose src={close} onClick={closeModal}></ModalClose>
                <div>
                    <ModalTitle>약관 및 주요 안내사항</ModalTitle>
                    <div>
                        <ModalSubTitle>[필수] 약관 및 주요 안내사항 동의</ModalSubTitle>
                        <ApplicationTerm>
                            주 마하카드 사 / 약관에 관한 내용으로 채울 예정정 주 마하카드 사 / 약관에 관한 내용으로 채울 예정정 주 마하카드 사 / 약관에 관한 내용으로 채울 예정정 주 마하카드 사 / 약관에 관한 내용으로 채울 예정정 주 마하카드 사 / 약관에 관한 내용으로 채울 예정정
                        </ApplicationTerm>
                    </div>
                </div>
                <div>
                    <ModalSubTitle>카드 신청 약관 동의</ModalSubTitle>
                    <div>
                        <span>[필수] 약관 및 주요 안내사항 동의</span>
                        <input type='checkbox'></input>
                    </div>
                    <div>
                        <span>[필수] 개인(신용)정보 동의</span>
                        <input type='checkbox'></input>
                    </div>
                    <div>
                        <span>[선택] 개인(신용)정보 동의</span>
                        <input type='checkbox'></input>
                    </div>
                    <div>
                        <span>[선택] 카드 신청/이용을 위한 동의</span>
                        <input type='checkbox'></input>
                    </div>
                    <div>
                        <button>확인</button>
                    </div>
                </div>
            </ModalBody>
        </ModalWrap>
    );
}

export default CardApplicationTerms;