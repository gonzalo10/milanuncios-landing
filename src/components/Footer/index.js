import React, { Fragment } from 'react'
import { Row, Col } from 'antd'
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'
import loadable from '@loadable/component'

import * as S from './styles'

const SvgIcon = loadable(() => import('../../common/SvgIcon'))
const Container = loadable(() => import('../../common/Container'))

const Footer = ({ t }) => {
	const handleChange = (event) => {
		i18n.changeLanguage(event.target.value)
	}

	const SocialLink = ({ href, src }) => {
		return (
			<a
				href={href}
				target='_blank'
				rel='noopener noreferrer'
				key={src}
				aria-label={src}>
				<SvgIcon src={src} />
			</a>
		)
	}

	return (
		<Fragment>
			<S.Footer>
				<Container>
					<Row type='flex' justify='space-between'>
						<Col lg={10} md={10} sm={12} xs={24}>
							<S.Language>{t('Contact')}</S.Language>
							<S.Large to='/'>{t('Tell us everything')}</S.Large>
							<S.Para>
								{t(
									`Do you have any question regarding the project? Feel free to reach out.`
								)}
							</S.Para>
							<a href='mailto:l.qqbadze@gmail.com'>
								<S.Chat>{t(`Let's Chat`)}</S.Chat>
							</a>
						</Col>
						<Col lg={8} md={8} sm={12} xs={24}>
							<S.Title>{t('Company')}</S.Title>
							<S.Large left='true' to='/'>
								{t('About')}
							</S.Large>
						</Col>
						<Col lg={6} md={6} sm={12} xs={24}>
							<S.Select>
								<S.Label htmlFor='select-lang'>{t('Language')}</S.Label>
								<S.LangSelect
									onChange={handleChange}
									value={i18n.language}
									id='select-lang'>
									<option value='en'>English</option>
									<option value='es'>Español</option>
								</S.LangSelect>
							</S.Select>
						</Col>
					</Row>
				</Container>
			</S.Footer>
		</Fragment>
	)
}

export default withTranslation()(Footer)
