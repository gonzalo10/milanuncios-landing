import React from 'react'
import { withTranslation } from 'react-i18next'

import * as S from './styles'

const Block = ({ title, content, t }) => {
	return (
		<S.Container>
			<h6>{t(title)}</h6>
			<S.TextWrapper>
				<S.Content>{t(content)}</S.Content>
			</S.TextWrapper>
		</S.Container>
	)
}

export default withTranslation()(Block)
