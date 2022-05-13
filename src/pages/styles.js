import styled from "styled-components"

export const Title = styled.h1`
	text-align: center;
`

export const Container = styled.div`
	width: 90%;
	margin-left: auto;
	margin-right: auto;
`

export const FlexContainer = styled(Container)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	height: 100%;
`

export const Field = styled.span`
	font-weight: bold;
`