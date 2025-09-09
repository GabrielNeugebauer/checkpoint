import './styles.css';

export default function HaveIBeenPwnedFrame() {
    return (
        <iframe 
            className="haveibeenpwned-frame"
            title="Have I Been Pwned"
            src="https://haveibeenpwned.com/"
        />
    );
}