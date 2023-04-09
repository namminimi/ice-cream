import React from 'react';
import DaumPostCode from 'react-daum-postcode';


type popupPageType = {
    onAddData: (data: string) => void
}
const PopupPage = ({onAddData}: popupPageType) => {
    //console.log(111)
    const handleComplete = (data:any) => {
        //console.log(333)
        console.log(data)
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            console.log(444)
            if(data.bname !== ''){
                extraAddress += data.bname;
            }
            if(data.buildingName !== '') {
                extraAddress += extraAddress !== '' ? `${data.buildingName}` : data.buildingName;
            }
            fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
        }
        console.log(fullAddress); // 주소 나옴
        onAddData(data)
    }

    const postCodeStyle:any = {
        display: "block",
        position: "absolute",
        top: "75%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        height: "400px",
        border: "2px solid #666"
    }

    const postCodeStyle2:any = {
        display: "block",
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "350px",
        height: "350px",
        border: "2px solid #666"
    }
    return (
        <div>
            <DaumPostCode onComplete={handleComplete} style={window.innerWidth !== 476 ?  postCodeStyle : postCodeStyle2}/>
        </div>
    );
};

export default PopupPage;