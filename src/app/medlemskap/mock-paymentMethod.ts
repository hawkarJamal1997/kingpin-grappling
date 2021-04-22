import {PaymentMethod} from './paymentMethod';


export const paymentMethodList: PaymentMethod[] = [
    {
        id: 11,
        method: 'Bankgiro',
        number:"5138-6217 ",
        content:'Var noga med att lämna medddelande om vad betalningen avser och vem som gjort ibetalningen.',
        imgPath:'assets/bankgirot-logo.svg'
    },
    {
        id: 12,
        method: 'Swish',
        number:"123-51-01-357" ,
        content:'Vid inbetalning med Swish meddela vad betalningen gäller samt avsändare.',
        imgPath:'assets/swish-logotype.svg'
    },
    {
        id: 13,
        method: 'Plusgirot',
        number:"80-78-62-8" ,
        content:'Ange namn som meddelande för den betalningen avser.',
        imgPath:'assets/plusgirot-logo.svg',
    },

] 