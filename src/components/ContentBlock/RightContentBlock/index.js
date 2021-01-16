import React from 'react'
import { Row, Col } from 'antd'
import { withTranslation } from 'react-i18next'
import loadable from '@loadable/component'

import * as S from './styles'

const SvgIcon = loadable(() => import('../../../common/SvgIcon'))
const Button = loadable(() => import('../../../common/Button'))

const RightBlock = ({ title, content, button, icon, t }) => {
	return (
		<S.RightBlockContainer>
			<Row type='flex' justify='space-between' align='middle'>
				<Col lg={11} md={11} sm={12} xs={24}>
					<S.ContentWrapper>
						<h6>{t(title)}</h6>
						<S.Content>{t(content)}</S.Content>
						<S.ButtonWrapper>
							{button &&
								typeof button === 'object' &&
								button.map((item, id) => {
									return (
										<Button key={id} color={item.color} width='true'>
											{t(item.title)}
										</Button>
									)
								})}
						</S.ButtonWrapper>
					</S.ContentWrapper>
				</Col>
				<Col lg={11} md={11} sm={12} xs={24}>
					<SvgIcon src={icon} className='about-block-image' />
				</Col>
			</Row>
		</S.RightBlockContainer>
	)
}

export default withTranslation()(RightBlock)
