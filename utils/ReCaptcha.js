import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export const ReCaptcha  = React.forwardRef((props, ref) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [token, setToken] = React.useState(props.value);

  const getNewCaptcha = () => {
    executeRecaptcha(props.action).then(newToken => {
      setToken(newToken);
      
      props.onChange({ 
        target: { id: props.id, value: newToken }
      });
    });
  }
  
  if (token === '') {
    getNewCaptcha();
  }

  React.useImperativeHandle(ref, () => ({
    generateNewCaptcha() {
      getNewCaptcha();
    }
  }));
 
  return (
    // <input hidden="true" value={token} rows="10" cols="50"></input>
    <div></div>
  )
});