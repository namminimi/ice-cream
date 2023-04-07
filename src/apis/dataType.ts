export interface iceCreamData {
    m_name: string;
    m_password: string;
    m_id: string;
    m_nickname: string;
    m_birth: string;
    m_gender: string;
    m_phone: string;
    m_add1: string;
    m_add2: string;
    m_comnick?: string | null;
    
}

export interface iceCreamData2 {
    p_img?: any;
    p_title: string;
    p_dsce: string;
    p_img1: string;
    p_img2?: string|null;
    p_img3?: string|null;
    p_img4?: string|null;
    p_brand: string;
    p_taste: string;
    p_price: number;
    p_amount: number;
    p_point: number;
}

export interface BrandDatas {
    brands: string
}

export interface NoticeDatas {
    w_no?:number;
    w_title: string;
    w_username: string;
    w_date: string;
    w_desc: string;
}

export interface CartDatas {
    c_no?: number;
    c_userId: string;
    c_taste: string;
    c_amount: number;
    c_title: string;
    c_img: string;
    c_point: number;
    c_price: number;
}