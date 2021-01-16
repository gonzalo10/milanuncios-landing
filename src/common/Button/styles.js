import styled from 'styled-components'

export const Button = styled.button`
	background: ${(props) => props.color || '#30962f'};
	color: ${(props) => (props.color ? '#30962f' : '#fff')};
	font-size: 1rem;
	font-weight: 700;
	width: 100%;
	border: ${(props) => (props.color ? '1px solid #30962f' : '0px')};
	border-radius: 8px;
	height: 60px;
	outline: none;
	cursor: pointer;
	margin-top: 0.625rem;
	max-width: 180px;
	:hover {
		background-color: ${(props) => props.color || '#267826'};
	}

	@media only screen and (max-width: 1024px) {
		width: ${(props) => (props.width ? '160px' : '100%')};
	}

	@media only screen and (max-width: 768px) {
		width: ${(props) => (props.width ? '140px' : '100%')};
	}

	@media only screen and (max-width: 480px) {
		width: ${(props) => (props.width ? '130px' : '100%')};
	}
`
