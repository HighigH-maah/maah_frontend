import {
  Benefit,
  BenefitDiv,
  BenefitList,
  BenefitTitle,
  HiCardPoint,
  HiCardRealPoint,
  HiImageSection,
  HiModalMid,
  HiModalTop,
  HiPointSection,
  InputWrapper,
  Modal,
  ModalCloseButton,
  PointWrapper,
  ShareBackImage,
  ShareInput,
} from "./ShareComponent";
import shareback from "../../assets/images/share-modal-back.png";
import blackvelvet from "../../assets/images/black_velvet.png";

function ShareModal({ isOpen, closeModal }) {
  return (
    <Modal isOpen={isOpen}>
      <ModalCloseButton onClick={closeModal}>닫기</ModalCloseButton>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="900"
        height="2"
        viewBox="0 0 900 2"
        fill="none"
      >
        <path opacity="0.4" d="M0 1L900 1" stroke="white" />
      </svg>
      <ShareBackImage />
      <HiModalTop>
        <HiCardPoint>HiCard Point</HiCardPoint>
        <HiCardRealPoint>5000P</HiCardRealPoint>
      </HiModalTop>
      <img src={shareback} name={shareback} />
      <HiModalMid>
        <HiImageSection>
          The Blue
          <img src={blackvelvet} name={blackvelvet} />
        </HiImageSection>
        <HiPointSection>
          <PointWrapper>
            <p>By:Card Point</p>
            <span>4500P</span>
          </PointWrapper>
          <InputWrapper>
            <ShareInput />
            <button>SHARE</button>
          </InputWrapper>
        </HiPointSection>
      </HiModalMid>
      <BenefitDiv>
        <BenefitTitle> BenefitDiv</BenefitTitle>
        <BenefitList>
          <Benefit>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M19.9708 35.0376C19.3587 33.7046 16.8519 31.7585 16.2281 31.4777C14.8011 30.6801 13.1422 30.3607 11.5086 30.5688C9.87494 30.777 8.3579 31.5012 7.19273 32.629C6.02755 33.7569 5.27934 35.2255 5.06413 36.807C4.84892 38.3884 5.17874 39.9945 6.00244 41.376C6.82614 42.7575 8.09769 43.8373 9.61989 44.448C11.1421 45.0586 12.8299 45.166 14.4215 44.7534C16.0132 44.3408 17.4197 43.4313 18.4231 42.166C19.4264 40.9007 19.9704 39.3502 19.9708 37.7551V11.4467C19.9708 10.9792 20.2947 10.5741 20.7507 10.4712L45 5L44.9998 32.5833M44.9998 32.5833L45 35.3013C44.9996 36.8964 44.4556 38.4469 43.4523 39.7122C42.4489 40.9775 41.0424 41.887 39.4508 42.2996C37.8591 42.7122 36.1713 42.6049 34.6491 41.9942C33.1269 41.3836 31.8554 40.3038 31.0317 38.9222C30.208 37.5407 29.8781 35.9347 30.0933 34.3532C30.3086 32.7717 31.0568 31.3031 32.2219 30.1753C33.3871 29.0474 34.9042 28.3232 36.5378 28.115C38.1714 27.9069 39.8303 28.2264 41.2573 29.0239C41.881 29.3047 44.3873 31.2504 44.9998 32.5833Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            영화 55% 할인
          </Benefit>
          <Benefit>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M19.9708 35.0376C19.3587 33.7046 16.8519 31.7585 16.2281 31.4777C14.8011 30.6801 13.1422 30.3607 11.5086 30.5688C9.87494 30.777 8.3579 31.5012 7.19273 32.629C6.02755 33.7569 5.27934 35.2255 5.06413 36.807C4.84892 38.3884 5.17874 39.9945 6.00244 41.376C6.82614 42.7575 8.09769 43.8373 9.61989 44.448C11.1421 45.0586 12.8299 45.166 14.4215 44.7534C16.0132 44.3408 17.4197 43.4313 18.4231 42.166C19.4264 40.9007 19.9704 39.3502 19.9708 37.7551V11.4467C19.9708 10.9792 20.2947 10.5741 20.7507 10.4712L45 5L44.9998 32.5833M44.9998 32.5833L45 35.3013C44.9996 36.8964 44.4556 38.4469 43.4523 39.7122C42.4489 40.9775 41.0424 41.887 39.4508 42.2996C37.8591 42.7122 36.1713 42.6049 34.6491 41.9942C33.1269 41.3836 31.8554 40.3038 31.0317 38.9222C30.208 37.5407 29.8781 35.9347 30.0933 34.3532C30.3086 32.7717 31.0568 31.3031 32.2219 30.1753C33.3871 29.0474 34.9042 28.3232 36.5378 28.115C38.1714 27.9069 39.8303 28.2264 41.2573 29.0239C41.881 29.3047 44.3873 31.2504 44.9998 32.5833Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            영화 55% 할인
          </Benefit>
          <Benefit>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M19.9708 35.0376C19.3587 33.7046 16.8519 31.7585 16.2281 31.4777C14.8011 30.6801 13.1422 30.3607 11.5086 30.5688C9.87494 30.777 8.3579 31.5012 7.19273 32.629C6.02755 33.7569 5.27934 35.2255 5.06413 36.807C4.84892 38.3884 5.17874 39.9945 6.00244 41.376C6.82614 42.7575 8.09769 43.8373 9.61989 44.448C11.1421 45.0586 12.8299 45.166 14.4215 44.7534C16.0132 44.3408 17.4197 43.4313 18.4231 42.166C19.4264 40.9007 19.9704 39.3502 19.9708 37.7551V11.4467C19.9708 10.9792 20.2947 10.5741 20.7507 10.4712L45 5L44.9998 32.5833M44.9998 32.5833L45 35.3013C44.9996 36.8964 44.4556 38.4469 43.4523 39.7122C42.4489 40.9775 41.0424 41.887 39.4508 42.2996C37.8591 42.7122 36.1713 42.6049 34.6491 41.9942C33.1269 41.3836 31.8554 40.3038 31.0317 38.9222C30.208 37.5407 29.8781 35.9347 30.0933 34.3532C30.3086 32.7717 31.0568 31.3031 32.2219 30.1753C33.3871 29.0474 34.9042 28.3232 36.5378 28.115C38.1714 27.9069 39.8303 28.2264 41.2573 29.0239C41.881 29.3047 44.3873 31.2504 44.9998 32.5833Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            영화 55% 할인
          </Benefit>
        </BenefitList>
      </BenefitDiv>
      <p>This is the modal content.</p>
    </Modal>
  );
}

export default ShareModal;
