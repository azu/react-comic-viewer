import styled from "@emotion/styled";

export type WrapperProps = {
  height: number;
  isExpansion: boolean;
  isFullScreen: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  background: #333;
  color: #fff;
  display: grid;
  grid-template: ${({ isFullScreen }) =>
    `1fr ${isFullScreen ? "0" : "40px"} / 1fr`};
  height: ${({ height, isExpansion }) =>
    `${height - (isExpansion ? 0 : 95)}px`};
  max-height: ${({ height, isExpansion }) => `${isExpansion ? height : 840}px`};
  min-height: ${({ isExpansion }) => `${isExpansion ? 0 : 440}px`};
  overflow: hidden;
  position: relative;
  transition: 0ms;
`;

export const Viewer = styled.div`
  height: 100%;
  position: relative;
`;

export type PagesWrapperProps = {
  currentPage: number;
  pageWidth: number;
  switchingFullScreen: boolean;
};

export const PagesWrapper = styled.div<PagesWrapperProps>`
  direction: rtl;
  display: grid;
  grid-auto-flow: column;
  height: 100%;
  overflow: hidden;
  position: absolute;
  right: 0;
  transform: translateX(
    calc(${({ currentPage, pageWidth }) => `${currentPage * pageWidth}px`})
  );
  transition: ${({ switchingFullScreen }) =>
    `${switchingFullScreen ? 0 : 0}ms`};
`;

export type NavigationButtonProps = {
  navigation: "next" | "prev";
  "data-is-stop": boolean;
};

export const NavigationButton = styled.a<NavigationButtonProps>`
  align-items: center;
  background: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: ${({ navigation }) =>
    navigation === "next" ? "flex-start" : "flex-end"};
  opacity: ${(props) => props["data-is-stop"] ? 0.1: 0.5};
  right: ${({ navigation }) => (navigation === "next" ? "auto" : "0")};
  padding: 0;
  position: absolute;
  transition: 0ms;
  width: calc(100% / 3);
  :hover {
    opacity: 1;
  }
  @media (max-width: 980px) {
    opacity: 0;
    :hover {
      opacity: 0;
    }
  }
`;

export type PageProps = {
  width: number;
};

export const Page = styled.div<PageProps>`
  overflow: hidden;
  width: ${({ width }) => `${width}px`};
`;

export type ImgProps = {
  isOdd: boolean;
  isSingleView: boolean;
};

export const Img = styled.img<ImgProps>`
  height: 100%;
  object-fit: contain;
  object-position: ${({ isOdd, isSingleView }) =>
    isSingleView ? "center" : isOdd ? "left" : "right"};
  width: 100%;
`;

export const Controller = styled.aside`
  bottom: 0;
  box-sizing: border-box;
  height: 40px;
  left: 0;
  padding: 0 16px;
  position: absolute;
  width: 100%;
`;

export const SubController = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const MainController = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

export const RangeInput = styled.input`
  cursor: pointer;
  max-width: 1024px;
  transform: rotate(180deg);
  width: 100%;
`;

export const ScaleController = styled.div`
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  height: 100%;
`;

export const ControlButton = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  color: #ccc;
  cursor: pointer;
  display: grid;
  font-size: 14px;
  gap: 8px;
  grid-template: auto / auto auto;
  height: 100%;
  outline: none;
`;

export const CloseButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  padding: 12px 12px;
  position: absolute;
  right: 0;
  top: 0;
`;
