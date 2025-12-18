## Result 组件示例

### basic-usage



```vue
<template>
  <fin-row>
    <fin-col :sm="12" :lg="6">
      <fin-result
        icon="success"
        title="Success Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <fin-button type="primary">Back</fin-button>
        </template>
      </fin-result>
    </fin-col>
    <fin-col :sm="12" :lg="6">
      <fin-result
        icon="warning"
        title="Warning Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <fin-button type="primary">Back</fin-button>
        </template>
      </fin-result>
    </fin-col>
    <fin-col :sm="12" :lg="6">
      <fin-result
        icon="error"
        title="Error Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <fin-button type="primary">Back</fin-button>
        </template>
      </fin-result>
    </fin-col>
    <fin-col :sm="12" :lg="6">
      <fin-result icon="info" title="Info Tip">
        <template #sub-title>
          <p>Using slot as subtitle</p>
        </template>
        <template #extra>
          <fin-button type="primary">Back</fin-button>
        </template>
      </fin-result>
    </fin-col>
  </fin-row>
</template>
```

### customized-content



```vue
<template>
  <fin-result title="404" sub-title="Sorry, request error">
    <template #icon>
      <fin-image
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
      />
    </template>
    <template #extra>
      <fin-button type="primary">Back</fin-button>
    </template>
  </fin-result>
</template>
```

