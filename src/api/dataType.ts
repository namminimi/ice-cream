export interface iceCreamData {
    m_name: string;
    m_password: string;
    m_id: string;
    m_nickname: string;
    m_birth: string;
    m_gender: string;
    m_phone: string;
    m_address: string;
    m_comnick?: string | null;
    
}

export interface iceCreamData2 {
    p_img: any;
    p_title: string;
    p_dsce: string;
    p_img1: string;
    p_img2?: string|null;
    p_img3?: string|null;
    p_img4?: string|null;
    p_brand: string;
}

export interface BrandDatas {
    [x: string]: any;
    brands: string
}