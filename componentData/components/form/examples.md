## Form 组件示例

### basic-form

在每一个 `form` 组件中，你需要一个 `form-item` 字段作为输入项的容器，用于获取值与验证值。

```vue
<template>
  <fin-form :model="form" label-width="120px">
    <fin-form-item label="Activity name">
      <fin-input v-model="form.name" />
    </fin-form-item>
    <fin-form-item label="Activity zone">
      <fin-select v-model="form.region" placeholder="please select your zone">
        <fin-option label="Zone one" value="shanghai" />
        <fin-option label="Zone two" value="beijing" />
      </fin-select>
    </fin-form-item>
    <fin-form-item label="Activity time">
      <fin-col :span="11">
        <fin-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </fin-col>
      <fin-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </fin-col>
      <fin-col :span="11">
        <fin-time-picker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </fin-col>
    </fin-form-item>
    <fin-form-item label="Instant delivery">
      <fin-switch v-model="form.delivery" />
    </fin-form-item>
    <fin-form-item label="Activity type">
      <fin-checkbox-group v-model="form.type">
        <fin-checkbox label="Online activities" name="type" />
        <fin-checkbox label="Promotion activities" name="type" />
        <fin-checkbox label="Offline activities" name="type" />
        <fin-checkbox label="Simple brand exposure" name="type" />
      </fin-checkbox-group>
    </fin-form-item>
    <fin-form-item label="Resources">
      <fin-radio-group v-model="form.resource">
        <fin-radio label="Sponsor" />
        <fin-radio label="Venue" />
      </fin-radio-group>
    </fin-form-item>
    <fin-form-item label="Activity form">
      <fin-input v-model="form.desc" type="textarea" />
    </fin-form-item>
    <fin-form-item>
      <fin-button type="primary" @click="onSubmit">Create</fin-button>
      <fin-button>Cancel</fin-button>
    </fin-form-item>
  </fin-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
```

### inline-form

通过设置 `inline` 属性为 `true` 可以让表单域变为行内的表单域。

```vue
<template>
  <fin-form :inline="true" :model="formInline" class="demo-form-inline">
    <fin-form-item label="Approved by">
      <fin-input
        v-model="formInline.user"
        placeholder="Approved by"
        clearable
      />
    </fin-form-item>
    <fin-form-item label="Activity zone">
      <fin-select
        v-model="formInline.region"
        placeholder="Activity zone"
        clearable
      >
        <fin-option label="Zone one" value="shanghai" />
        <fin-option label="Zone two" value="beijing" />
      </fin-select>
    </fin-form-item>
    <fin-form-item label="Activity time">
      <fin-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </fin-form-item>
    <fin-form-item>
      <fin-button type="primary" @click="onSubmit">Query</fin-button>
    </fin-form-item>
  </fin-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style>
.demo-form-inline .fin-input {
  --fin-input-width: 220px;
}
</style>
```

### alignment

通过设置 `label-position` 属性可以改变表单域标签的位置，可选值为 `top`、`left`， 当设为 `top` 时标签会置于表单域的顶部

```vue
<template>
  <fin-radio-group v-model="labelPosition" label="label position">
    <fin-radio-button label="left">Left</fin-radio-button>
    <fin-radio-button label="right">Right</fin-radio-button>
    <fin-radio-button label="top">Top</fin-radio-button>
  </fin-radio-group>
  <div style="margin: 20px" />
  <fin-form
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
  >
    <fin-form-item label="Name">
      <fin-input v-model="formLabelAlign.name" />
    </fin-form-item>
    <fin-form-item label="Activity zone">
      <fin-input v-model="formLabelAlign.region" />
    </fin-form-item>
    <fin-form-item label="Activity form">
      <fin-input v-model="formLabelAlign.type" />
    </fin-form-item>
  </fin-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormProps } from '@jdt/find-plus'

const labelPosition = ref<FormProps['labelPosition']>('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>
```

### validation

`Form` 组件提供了表单验证的功能，只需为 `rules` 属性传入约定的验证规则，并将 `form-Item` 的 `prop` 属性设置为需要验证的特殊键值即可。 更多高级用法可参考 [async-validator](https://github.com/yiminghe/async-validator)。

```vue
<template>
  <fin-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <fin-form-item label="Activity name" prop="name">
      <fin-input v-model="ruleForm.name" />
    </fin-form-item>
    <fin-form-item label="Activity zone" prop="region">
      <fin-select v-model="ruleForm.region" placeholder="Activity zone">
        <fin-option label="Zone one" value="shanghai" />
        <fin-option label="Zone two" value="beijing" />
      </fin-select>
    </fin-form-item>
    <fin-form-item label="Activity count" prop="count">
      <fin-select-v2
        v-model="ruleForm.count"
        placeholder="Activity count"
        :options="options"
      />
    </fin-form-item>
    <fin-form-item label="Activity time" required>
      <fin-col :span="11">
        <fin-form-item prop="date1">
          <fin-date-picker
            v-model="ruleForm.date1"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </fin-form-item>
      </fin-col>
      <fin-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </fin-col>
      <fin-col :span="11">
        <fin-form-item prop="date2">
          <fin-time-picker
            v-model="ruleForm.date2"
            label="Pick a time"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </fin-form-item>
      </fin-col>
    </fin-form-item>
    <fin-form-item label="Instant delivery" prop="delivery">
      <fin-switch v-model="ruleForm.delivery" />
    </fin-form-item>
    <fin-form-item label="Activity type" prop="type">
      <fin-checkbox-group v-model="ruleForm.type">
        <fin-checkbox label="Online activities" name="type" />
        <fin-checkbox label="Promotion activities" name="type" />
        <fin-checkbox label="Offline activities" name="type" />
        <fin-checkbox label="Simple brand exposure" name="type" />
      </fin-checkbox-group>
    </fin-form-item>
    <fin-form-item label="Resources" prop="resource">
      <fin-radio-group v-model="ruleForm.resource">
        <fin-radio label="Sponsorship" />
        <fin-radio label="Venue" />
      </fin-radio-group>
    </fin-form-item>
    <fin-form-item label="Activity form" prop="desc">
      <fin-input v-model="ruleForm.desc" type="textarea" />
    </fin-form-item>
    <fin-form-item>
      <fin-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </fin-button>
      <fin-button @click="resetForm(ruleFormRef)">Reset</fin-button>
    </fin-form-item>
  </fin-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from '@jdt/find-plus'

interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  type: string[]
  resource: string
  desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>
```

### custom-validation

本例还使用`status-icon`属性为输入框添加了表示校验结果的反馈图标。

```vue
<template>
  <fin-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <fin-form-item label="Password" prop="pass">
      <fin-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </fin-form-item>
    <fin-form-item label="Confirm" prop="checkPass">
      <fin-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </fin-form-item>
    <fin-form-item label="Age" prop="age">
      <fin-input v-model.number="ruleForm.age" />
    </fin-form-item>
    <fin-form-item>
      <fin-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</fin-button
      >
      <fin-button @click="resetForm(ruleFormRef)">Reset</fin-button>
    </fin-form-item>
  </fin-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from '@jdt/find-plus'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
```

### form-items

除了一次通过表单组件上的所有验证规则外. 您也可以动态地通过验证规则或删除单个表单字段的规则。

```vue
<template>
  <fin-form
    ref="formRef"
    :model="dynamicValidateForm"
    label-width="120px"
    class="demo-dynamic"
  >
    <fin-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur',
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change'],
        },
      ]"
    >
      <fin-input v-model="dynamicValidateForm.email" />
    </fin-form-item>
    <fin-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="'Domain' + index"
      :prop="'domains.' + index + '.value'"
      :rules="{
        required: true,
        message: 'domain can not be null',
        trigger: 'blur',
      }"
    >
      <fin-input v-model="domain.value" />
      <fin-button class="mt-2" @click.prevent="removeDomain(domain)"
        >Delete</fin-button
      >
    </fin-form-item>
    <fin-form-item>
      <fin-button type="primary" @click="submitForm(formRef)"
        >Submit</fin-button
      >
      <fin-button @click="addDomain">New domain</fin-button>
      <fin-button @click="resetForm(formRef)">Reset</fin-button>
    </fin-form-item>
  </fin-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from '@jdt/find-plus'

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: '',
    },
  ],
  email: '',
})

interface DomainItem {
  key: number
  value: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: '',
  })
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
```

### number-validate

数字类型的验证需要在 `v-model` 处加上 `.number` 的修饰符，这是 Vue 自身提供的用于将绑定值转化为 number 类型的修饰符。

```vue
<template>
  <fin-form
    ref="formRef"
    :model="numberValidateForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <fin-form-item
      label="age"
      prop="age"
      :rules="[
        { required: true, message: 'age is required' },
        { type: 'number', message: 'age must be a number' },
      ]"
    >
      <fin-input
        v-model.number="numberValidateForm.age"
        type="text"
        autocomplete="off"
      />
    </fin-form-item>
    <fin-form-item>
      <fin-button type="primary" @click="submitForm(formRef)"
        >Submit</fin-button
      >
      <fin-button @click="resetForm(formRef)">Reset</fin-button>
    </fin-form-item>
  </fin-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from '@jdt/find-plus'

const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
  age: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
```

### size-control

如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的 `size` 属性，直接为这个表单项或表单组件设置自己的 size 属性即可。

```vue
<template>
  <div>
    <fin-radio-group v-model="size" label="size control">
      <fin-radio-button label="large">large</fin-radio-button>
      <fin-radio-button label="default">default</fin-radio-button>
      <fin-radio-button label="small">small</fin-radio-button>
    </fin-radio-group>
    <fin-radio-group v-model="labelPosition" label="position control">
      <fin-radio-button label="left">Left</fin-radio-button>
      <fin-radio-button label="right">Right</fin-radio-button>
      <fin-radio-button label="top">Top</fin-radio-button>
    </fin-radio-group>
  </div>
  <br />
  <fin-form
    ref="form"
    :model="sizeForm"
    label-width="auto"
    :label-position="labelPosition"
    :size="size"
  >
    <fin-form-item label="Activity name">
      <fin-input v-model="sizeForm.name" />
    </fin-form-item>
    <fin-form-item label="Activity zone">
      <fin-select
        v-model="sizeForm.region"
        placeholder="please select your zone"
      >
        <fin-option label="Zone one" value="shanghai" />
        <fin-option label="Zone two" value="beijing" />
      </fin-select>
    </fin-form-item>
    <fin-form-item label="Activity time">
      <fin-col :span="11">
        <fin-date-picker
          v-model="sizeForm.date1"
          type="date"
          label="Pick a date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </fin-col>
      <fin-col class="text-center" :span="1" style="margin: 0 0.5rem"
        >-</fin-col
      >
      <fin-col :span="11">
        <fin-time-picker
          v-model="sizeForm.date2"
          label="Pick a time"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </fin-col>
    </fin-form-item>
    <fin-form-item label="Activity type">
      <fin-checkbox-group v-model="sizeForm.type">
        <fin-checkbox-button label="Online activities" name="type" />
        <fin-checkbox-button label="Promotion activities" name="type" />
      </fin-checkbox-group>
    </fin-form-item>
    <fin-form-item label="Resources">
      <fin-radio-group v-model="sizeForm.resource">
        <fin-radio border label="Sponsor" />
        <fin-radio border label="Venue" />
      </fin-radio-group>
    </fin-form-item>
    <fin-form-item>
      <fin-button type="primary" @click="onSubmit">Create</fin-button>
      <fin-button>Cancel</fin-button>
    </fin-form-item>
  </fin-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const size = ref('default')
const labelPosition = ref('right')

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
}
</script>

<style>
.fin-radio-group {
  margin-right: 12px;
}
</style>
```

### accessibility



```vue
<template>
  <fin-form label-position="left" label-width="150px" style="max-width: 460px">
    <fin-space fill>
      <fin-alert type="info" show-icon :closable="false">
        <p>"Full Name" label is automatically attached to the input:</p>
      </fin-alert>
      <fin-form-item label="Full Name">
        <fin-input v-model="formAccessibility.fullName" />
      </fin-form-item>
    </fin-space>
    <fin-space fill>
      <fin-alert type="info" show-icon :closable="false">
        <p>
          "Your Information" serves as a label for the group of inputs. <br />
          You must specify labels on the individal inputs. Placeholders are not
          replacements for using the "label" attribute.
        </p>
      </fin-alert>
      <fin-form-item label="Your Information">
        <fin-row :gutter="20">
          <fin-col :span="12">
            <fin-input
              v-model="formAccessibility.firstName"
              label="First Name"
              placeholder="First Name"
            />
          </fin-col>
          <fin-col :span="12">
            <fin-input
              v-model="formAccessibility.lastName"
              label="Last Name"
              placeholder="Last Name"
            />
          </fin-col>
        </fin-row>
      </fin-form-item>
    </fin-space>
  </fin-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formAccessibility = reactive({
  fullName: '',
  firstName: '',
  lastName: '',
})
</script>
```

