'use server'

export async function submitEarlyAccess(prevState: any, formData: FormData) {
  try {
    const wallet = formData.get('wallet')
    const email = formData.get('email')

    // Validate inputs
    if (!wallet || !email) {
      return { error: 'Please fill in all fields' }
    }

    if (typeof email !== 'string' || !email.includes('@')) {
      return { error: 'Please enter a valid email address' }
    }

    // Here you would typically:
    // 1. Validate the wallet address format
    // 2. Save to your database
    // 3. Send confirmation email
    // 4. Add to waitlist

    // Simulated delay for demo
    await new Promise(resolve => setTimeout(resolve, 1000))

    return { success: 'Thank you for joining the waitlist!' }
  } catch (error) {
    return { error: 'Something went wrong. Please try again.' }
  }
}

