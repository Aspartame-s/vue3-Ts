//申明文件
//比如 ts文件中要使用 jQuery 
//直接使用会报错
//jQuery('#foo')
//这时候就要申明 
jQuery('#foo')

//一般申明语句都是放在单独的 .d.ts文件中，代表该文件只有适配ts的类型声明
//或者安装 npm install --save @type/jquery

