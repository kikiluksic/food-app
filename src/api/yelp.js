import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer GzFwJZ4I8gR_FuBtOCyuET5yMrdeWFJPv-FWv_qMOz-vcRsFxYfVTRyZUbVxcrj1yPNWkleEA1Mj0k4CZgaiRdfjyEbmq6P8MyLjKhiWbFmP_0C_F3jdOPN61g57YXYx',
        },
});
