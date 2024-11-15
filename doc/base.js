const { default: Enum, preset } = _ReactEnum;
const { createWithRemoteLoader } = remoteLoader;
const { Divider } = antd;

preset({
  base: {
    confirm: () => [{ description: '是', value: 'Y' }, {
      description: '否', value: 'N'
    }]
  }
});

const BaseExample = createWithRemoteLoader({
  modules: ['components-core:Global@PureGlobal']
})(({ remoteModules }) => {
  const [PureGlobal] = remoteModules;
  return <PureGlobal preset={{
    enums: {
      gender: [{ value: 'M', description: '男' }, {
        value: 'F', description: '女'
      }], marital: async () => [{ description: '已婚', value: 'Y' }, {
        description: '未婚', value: 'N'
      }]
    }
  }}>
    <Enum moduleName="gender" name="M" />
    <Divider />
    <Enum moduleName="gender">{(data) => {
      return data.map((data) => `${data.value}:${data.description}`).join(',');
    }}</Enum>
    <Divider />
    <Enum moduleName={['gender', 'marital']}>{([gender, marital]) => {
      return <div>
        <div>{gender.map((data) => `${data.value}:${data.description}`).join(',')}</div>
        <div>{marital.map((data) => `${data.value}:${data.description}`).join(',')}</div>
      </div>;
    }}</Enum>
    <Divider />
    <Enum moduleName="confirm" name="Y" />
    <Enum moduleName="confirm" name="N" />
  </PureGlobal>;
});

render(<BaseExample />);
