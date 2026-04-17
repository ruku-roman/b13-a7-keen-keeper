const SocialButton = ({
  Icon,
  href,
  label = "social link",
  size = 16,
  variant = "default",
  className = "",
  ...props
}) => {
  const baseStyles =
    "btn btn-circle btn-sm transition-all duration-300 hover:scale-110 shadow-md";

  const variants = {
    default:
      "bg-base-100 text-primary hover:bg-accent hover:text-accent-content",
    outline:
      "btn-outline text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-primary hover:bg-base-200",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`${baseStyles} ${variants[variant] || variants.default} ${className}`}
      {...props}
    >
      {Icon && <Icon size={size} />}
    </a>
  );
};

export default SocialButton;