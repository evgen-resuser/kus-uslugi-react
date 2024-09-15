import PropTypes from "prop-types";

export default function SocialButton({icon, name, link}) {
    return (
        <div className={"social-button"}>
            <a href={link}><img className={"a-icon"} src={icon} alt={name}/></a>
        </div>
    )
}

SocialButton.propTypes = {
    icon: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string
}