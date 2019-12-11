import styled from "styled-components";

export const VideoItem = styled.div`
  display: flex !important;
  align-items: center !important;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const VideoDetails = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	font-family: TitlingGothicFBWideLight;
`;

export const VideoTitle = styled.div`
  font-weight: bold;
`;

export const VideoDescription = styled.div`

`;