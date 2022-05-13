import { useTranslation } from "react-i18next";
import { Container, InfoContainer, Title } from "./styles";

export default function Contact() {
	const {t} = useTranslation()
	return (
		<Container>
			<Title>{t("contact-us.title")}</Title>
			<InfoContainer>
				<p>
					Sed rhoncus massa vitae nibh dignissim porta. Donec commodo sem eu turpis finibus, ac viverra nisi finibus. 
					Donec rhoncus metus a ipsum interdum, non porttitor odio semper. Vivamus felis arcu, interdum a diam nec, 
					faucibus feugiat nibh. Aliquam velit tellus, accumsan at dolor vel, mattis vestibulum elit. Praesent vehicula
					risus vel lacus imperdiet interdum. Nam a consequat ex. Aliquam arcu nisl, viverra id nunc in, 
					lacinia placerat leo.
				</p>
				<p>
					Nunc arcu sem, eleifend non arcu quis, sagittis porta lectus. Cras vitae arcu est. Quisque ac vehicula sem. 
					Morbi auctor pulvinar urna ut condimentum. Ut eget massa semper, viverra risus quis, eleifend tortor. 
					Cras vel lorem odio. Proin a molestie lacus, ut tincidunt est. Quisque pretium et dui eu lobortis. 
					Proin vestibulum volutpat orci, id laoreet nunc accumsan id. Vestibulum tempor est eget facilisis tincidunt. 
					Mauris at luctus sapien. Cras egestas quis lacus sed iaculis. Phasellus facilisis, ex non iaculis convallis, 
					nunc felis sodales nunc, id tempor sapien massa id justo.
				</p>
				<p>
					Donec pulvinar odio ac leo aliquam pellentesque. In hac habitasse platea dictumst. Donec pharetra
					ullamcorper erat non ornare. Aliquam volutpat mattis pretium. Fusce blandit, ipsum id congue aliquam, 
					purus mi varius libero, eget vehicula est ligula nec mi. Etiam iaculis vel sapien eget malesuada. 
					Nullam tempus pretium volutpat. Pellentesque tortor est, condimentum quis facilisis id, varius nec leo. 
					Vivamus nulla diam, mattis in maximus in, dignissim id ex. Proin at mollis neque.

				</p>

			</InfoContainer>
		</Container>
  	)
}