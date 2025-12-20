/**
 * Form Component
 *
 * Contact form with fields for:
 * - Full name
 * - Email address
 * - Phone number
 * - Message (textarea)
 *
 * Note: This is a presentational component - form submission handling
 * would need to be added (e.g., using Next.js server actions or API routes)
 */
const Form = () => {
  return (
    <form className="flex flex-col gap-4">
      {/* Text input for full name */}
      <input type="text" className="input" placeholder="Full name" />
      {/* Email input - using type="text" but could be type="email" for validation */}
      <input type="text" className="input" placeholder="Email address" />
      {/* Phone input */}
      <input type="text" className="input" placeholder="Phone number" />
      {/* Multi-line text input for message */}
      <textarea className="textarea mb-2" placeholder="Your message" />
      {/* Submit button - self-start aligns it to the left */}
      <button type="submit" className="btn self-start">
        Send message
      </button>
    </form>
  );
};

export default Form;
