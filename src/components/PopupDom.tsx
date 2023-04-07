
import ReactDOM from 'react-dom'




const PopupDom = ({children}:{children?: React.ReactNode}) => {
    const el = document.getElementById('popupDom') as HTMLDivElement
    return ReactDOM.createPortal(children, el)
};


export default PopupDom