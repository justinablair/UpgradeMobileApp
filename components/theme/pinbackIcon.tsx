import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';
import Colours from './Colour'; // Update the path to Colour.js

interface SvgPinBackProps {
  fill?: string;
}

const SvgPinBack: React.FC<SvgPinBackProps> = ({fill}) => (
  <Svg width="23" height="18" viewBox="0 0 23 18" fill="none">
    <Defs>
      <ClipPath id="clip0">
        <Rect width="23" height="18" fill="white" />
      </ClipPath>
    </Defs>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.60502 13.483L3.76994 13.6461L3.84659 13.7186L6.08471 15.9558C6.18195 16.0555 6.28369 16.1564 6.42946 16.2986C6.50634 16.3777 6.59214 16.4616 6.72088 16.5848L6.76206 16.6281C6.81555 16.6847 6.82906 16.6988 6.85368 16.722C7.14987 17.018 7.50651 17.2771 7.8967 17.4765C8.28767 17.6751 8.70515 17.8124 9.13614 17.8844C9.5318 17.9502 9.9315 17.9857 10.3322 17.9907C10.4223 17.9933 10.4681 17.9945 10.5249 17.9958C10.6435 17.9986 10.7439 18 10.8415 18H16.7312H16.7331H17.3261C17.474 18 17.5903 17.9976 17.8452 17.9905C18.2359 17.9858 18.6363 17.9503 19.0323 17.8845C19.4634 17.8125 19.8803 17.675 20.2691 17.4767C20.6598 17.2784 21.0177 17.0186 21.3283 16.7077C21.6369 16.3966 21.8951 16.0422 22.0954 15.655C22.2939 15.2588 22.4302 14.8442 22.5042 14.4164C22.5695 14.0156 22.6043 13.6173 22.6093 13.218C22.6148 13.038 22.6177 12.8692 22.6177 12.7062V5.29385L22.6161 5.161C22.6138 4.96847 22.6124 4.8823 22.6091 4.7702C22.6043 4.38272 22.5695 3.98436 22.5053 3.59024C22.4302 3.15582 22.2939 2.74123 22.0995 2.35308C21.8969 1.9577 21.6376 1.60167 21.3281 1.29207C21.0177 0.981363 20.6598 0.721607 20.268 0.522681C19.8803 0.324979 19.4634 0.187494 19.0329 0.115609C18.6381 0.047482 18.2346 0.0116983 17.8302 0.00924352C17.5903 0.0024164 17.474 0 17.3261 0H10.8397C10.742 0 10.6417 0.00141478 10.523 0.00417483C10.4663 0.00549403 10.4204 0.00671184 10.3198 0.00949477C9.93098 0.0117214 9.52819 0.0475174 9.1304 0.116267C8.70331 0.187558 8.28582 0.324864 7.89626 0.522782C7.50466 0.722854 7.14803 0.981985 6.83788 1.2915C6.82694 1.30145 6.80834 1.32086 6.72115 1.41406C6.61044 1.5185 6.51124 1.61542 6.41567 1.71332C6.26823 1.85688 6.17675 1.94751 6.07586 2.05131L3.77639 4.34673C3.74744 4.37452 3.71821 4.40307 3.6842 4.43666L3.59941 4.52075C3.50896 4.60864 3.45136 4.66594 3.38736 4.73307L1.33462 6.78415L1.31229 6.80615L1.28405 6.83435L1.23195 6.88695C1.18276 6.93689 1.16214 6.95772 1.13866 6.98103C1.05444 7.06525 1.01127 7.10944 0.962783 7.16301C0.791714 7.33007 0.631013 7.50742 0.481578 7.69408C0.337288 7.84697 0.220636 8.02389 0.136944 8.21697L0.113251 8.27983C-0.0377503 8.74807 -0.0377503 9.25193 0.113251 9.72017L0.138822 9.78732C0.223671 9.97949 0.339677 10.1563 0.482098 10.3105C0.637871 10.4995 0.803043 10.6807 0.976989 10.8531L1.05176 10.9294C1.09434 10.9726 1.11209 10.9906 1.13876 11.0172C1.16532 11.0436 1.18523 11.0637 1.23391 11.113C1.28423 11.1641 1.30816 11.1882 1.33759 11.2174L3.40044 13.2831L3.60502 13.483ZM16.7331 17.3077V18L16.7312 17.3077V16.6154H10.8415C10.7559 16.6154 10.6658 16.6141 10.5571 16.6116C10.503 16.6103 10.4596 16.6092 10.3599 16.6064C10.0191 16.6021 9.68959 16.5728 9.36375 16.5186C9.07211 16.4699 8.78923 16.3769 8.52526 16.2428C8.26498 16.1098 8.0258 15.936 7.8178 15.7284C7.80869 15.7195 7.79122 15.7012 7.76838 15.6771C7.70052 15.6053 7.69434 15.5988 7.66523 15.5723C7.55988 15.4712 7.48371 15.3967 7.40831 15.3195C7.25801 15.1725 7.16334 15.0787 7.06959 14.9826L4.77874 12.6926C4.75718 12.6699 4.73427 12.6485 4.71016 12.6286L4.57558 12.4955L4.37404 12.2986L2.31524 10.2369C2.28836 10.2102 2.26844 10.1902 2.21976 10.1408C2.16944 10.0898 2.14551 10.0656 2.11609 10.0364C2.09433 10.0147 2.0789 9.99906 2.03905 9.95859L1.99939 9.9182L1.95808 9.87613C1.80639 9.72563 1.66843 9.57388 1.50462 9.37679C1.47092 9.34135 1.44241 9.30138 1.41989 9.25809C1.37272 9.08876 1.37286 8.9097 1.4203 8.74043C1.44 8.70256 1.46529 8.66781 1.49537 8.63737L1.54591 8.58023C1.66868 8.42501 1.80158 8.27809 1.9787 8.10401C2.01174 8.06699 2.0421 8.03573 2.11599 7.96184C2.14279 7.93523 2.16811 7.90965 2.2178 7.8592L2.26482 7.81171L2.28758 7.78899L2.30831 7.76854L4.37782 5.70047C4.43837 5.63726 4.48585 5.59002 4.60265 5.47584L4.65717 5.4218C4.67377 5.4054 4.68882 5.39062 4.72666 5.3595L7.06193 3.02328C7.15878 2.92375 7.24339 2.83991 7.39452 2.69246C7.48765 2.59736 7.57356 2.51342 7.67368 2.41896C7.69897 2.39489 7.72828 2.36401 7.80199 2.28512C8.02395 2.06399 8.26313 1.8902 8.52482 1.7565C8.78738 1.62311 9.07026 1.53007 9.3623 1.48132C9.68891 1.42488 10.0157 1.39584 10.3432 1.39383L10.3686 1.39316C10.4645 1.39065 10.5054 1.38957 10.5552 1.38842C10.664 1.38589 10.7541 1.38462 10.8397 1.38462H17.3261C17.4569 1.38462 17.5646 1.38685 17.8068 1.39358C18.1501 1.39583 18.4777 1.42488 18.8012 1.48069C19.0957 1.52988 19.3774 1.62277 19.6401 1.75673C19.9027 1.89004 20.1414 2.06334 20.3486 2.27079C20.5565 2.47869 20.7304 2.71752 20.8644 2.97886C20.9951 3.24007 21.0889 3.52525 21.1398 3.81949C21.1918 4.13915 21.2206 4.46896 21.2248 4.79954C21.2281 4.91244 21.2294 4.99302 21.2316 5.17732L21.2331 5.30346L21.2331 5.59038V12.7062C21.2331 12.8542 21.2304 13.0096 21.2251 13.1887C21.2206 13.531 21.1918 13.8609 21.1387 14.1872C21.0889 14.4747 20.9951 14.7599 20.8614 15.0269C20.7299 15.2811 20.555 15.5212 20.347 15.7308C20.1414 15.9367 19.9027 16.11 19.6412 16.2427C19.3774 16.3772 19.0957 16.4701 18.8049 16.5187C18.4789 16.5728 18.1485 16.6021 17.8174 16.6062C17.5646 16.6131 17.4569 16.6154 17.3261 16.6154H16.7331V17.3077Z"
      //   fill="#F79E1B"
      fill={fill}
    />
    <Path
      d="M17.0708 11.2169L10.8437 5L10 5.84462L16.2271 12.0569L17.0708 11.2169Z"
      //   fill={fill || 'white'}
      fill={fill}
    />
    <Path
      d="M16.2169 4.99997L10 11.227L10.8446 12.0707L17.0569 5.84366L16.2169 4.99997Z"
      fill={fill}
    />
  </Svg>
);

SvgPinBack.defaultProps = {
  fill: Colours.white, // Use the updated variable name
};

export const PinBackIcon: React.FC<SvgPinBackProps> = SvgPinBack;
