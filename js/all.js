
Vue.createApp({
    data() {
        return {
            abouts: [{
                id: '1',
                title: '正確資訊',
                para: '本網站提供政府給予最新資訊確保防疫資訊無落差'
            }, {
                id: '2',
                title: '團隊研發',
                para: '結合政府醫院一起研發新型疫苗對抗WH-78病毒'
            }, {
                id: '3',
                title: '團隊陣容',
                para: '集結醫療及科技業IT人才打造資訊整合網站'
            }, {
                id: '4',
                title: '疫苗種類',
                para: '目前各地方醫院有WH疫苗新型WH-2仍在實驗階段'
            }
            ],
            products: [{
                title: '抗菌洗手乳',
                img: './img/product-a.jpg',
                price: 200,
                amountShow: 0,
            }, {
                title: '一般醫療口罩',
                img: './img/product-b.jpg',
                price: 180,
                amountShow: 0,
            }, {
                title: '特殊N95口罩',
                img: './img/product-c.jpg',
                price: 50,
                amountShow: 0,
            }
                , {
                title: '滾筒衛生紙',
                img: './img/product-d.jpg',
                price: 60,
                amountShow: 0,
            }
                , {
                title: '體溫計',
                img: './img/product-e.jpg',
                price: 99,
                amountShow: 0,
            }
                , {
                title: '冷凍健康餐',
                img: './img/product-f.jpg',
                price: 160,
                amountShow: 0,
            }
            ], chat: '',
            input: [],
            reply: [
                '目前疫情嚴重疫世界關心您!', '歡迎於聯絡我們填寫詢問資料由專人為您服務', '有甚麼需要服務的嗎?'
            ]
        }
    },
    methods: {
        minus(product) {
            product.amountShow--;
            product.amountShow = (product.amountShow < 1) ? 0 : product.amountShow
        },
        plus(product) {
            product.amountShow++;
            product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
        }, addInput() {
            this.input.push(this.chat)
            this.chat = '';
        },
        h() {
            this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight + 100
        },
        async go() {
            await this.addInput();
            await this.h();
        }
    }, computed: {
        sub() {
            return this.products.map(data => data.price * data.amountShow)
        },
        total() {
            return this.sub.reduce((a, b) => a + b)
        },
    }
}).mount("#app");