export const AccountRules = {
  name: [
    {
      required: true,
      // 不符合规则的提示文字
      message: '用户名必传',
      // 触发规则验证的方式
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9A-Z]{5,10}$/,
      message: '用户名必须是5-10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9A-Z]{3,}$/,
      message: '密码必须是3-10个字母或数字',
      trigger: 'blur'
    }
  ]
}
export const PhoneRules = {
  phone: [
    {
      required: true,
      message: '手机号码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    }
  ],
  valid: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{4,}$/,
      message: '验证码格式错误',
      trigger: 'blur'
    }
  ]
}
