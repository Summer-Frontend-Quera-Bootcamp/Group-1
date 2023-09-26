import AuthenticateLayout from "../../../Layout/AuthenticateLayout"
import AccountCard from "../../../components/FormContainer/AccountCard"

const ResetLinkSent = () => {
  return (
    <AuthenticateLayout showSignup={false}>
      <AccountCard title="فراموشی رمز عبور">
        <p className="text-sm text-center">لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.</p>
      </AccountCard>
    </AuthenticateLayout>
  )
}

export default ResetLinkSent