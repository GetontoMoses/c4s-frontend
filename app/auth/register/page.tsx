'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import LinearProgress from '@mui/material/LinearProgress';
import FormHelperText from '@mui/material/FormHelperText';

// Icons
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import BusinessIcon from '@mui/icons-material/Business';
import MapIcon from '@mui/icons-material/Map';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Demo counties in Kenya
const COUNTIES = [
  'Nairobi', 'Mombasa', 'Kisumu', 'Nakuru', 'Kiambu', 'Uasin Gishu', 'Kajiado', 'Machakos',
  'Nyeri', 'Meru', 'Kakamega', 'Kilifi', 'Laikipia', 'Kericho', 'Kisii', 'Bomet'
];

const ROLES = [
  { value: 'pastor', label: 'Senior Pastor' },
  { value: 'church_admin', label: 'Church Administrator' },
  { value: 'associate_pastor', label: 'Associate Pastor' },
  { value: 'finance_officer', label: 'Finance Officer' },
  { value: 'board_member', label: 'Church Board Member' },
  { value: 'ministry_leader', label: 'Ministry Leader' },
  { value: 'other', label: 'Other' },
];

const PLANS = [
  { id: 'trial', name: 'Free Trial', price: 'KES 0', period: '30 days', desc: 'Perfect for exploring the platform. 1 active wellness campaign, basic reporting, standard giving routes.' },
  { id: 'basic', name: 'Basic', price: 'KES 1,500', period: '/month', desc: 'For smaller congregations. Up to 3 active wellness campaigns, WhatsApp alerts, standard M-Pesa integration.' },
  { id: 'standard', name: 'Standard', price: 'KES 2,500', period: '/month', desc: 'Best value for growing churches. Unlimited campaigns, basic retreats access, 2-signature approvals, email receipts.' },
  { id: 'premium', name: 'Custom', price: 'TBD', period: '/month', desc: 'Complete wellness solution. Vetted counselor network access, advanced audit ledger, multi-admin settings.' },
];

export default function RegisterPage() {
  const router = useRouter();

  // Form states
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('+254');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [showPw, setShowPw] = React.useState(false);
  const [showConfirmPw, setShowConfirmPw] = React.useState(false);

  const [churchName, setChurchName] = React.useState('');
  const [denomination, setDenomination] = React.useState('');
  const [regNumber, setRegNumber] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [country] = React.useState('Kenya');
  const [county, setCounty] = React.useState('');
  const [city, setCity] = React.useState('');

  const [pastorName, setPastorName] = React.useState('');

  const [role, setRole] = React.useState('');
  const [otherRole, setOtherRole] = React.useState('');

  const [authorized, setAuthorized] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState('trial');

  const [termsAgree, setTermsAgree] = React.useState(false);
  const [privacyAgree, setPrivacyAgree] = React.useState(false);
  const [fundsAcknowledge, setFundsAcknowledge] = React.useState(false);

  // Validation / Error states
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitError, setSubmitError] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  // Password strength calculation
  const getPasswordStrength = (pw: string) => {
    if (!pw) return { score: 0, label: 'None', color: 'error' as const };
    let score = 0;
    if (pw.length >= 6) score += 1;
    if (pw.length >= 10) score += 1;
    if (/[A-Z]/.test(pw)) score += 1;
    if (/[0-9]/.test(pw)) score += 1;
    if (/[^A-Za-z0-9]/.test(pw)) score += 1;

    if (score <= 2) return { score: 33, label: 'Weak', color: 'error' as const };
    if (score <= 4) return { score: 66, label: 'Medium', color: 'warning' as const };
    return { score: 100, label: 'Strong', color: 'success' as const };
  };

  const pwStrength = getPasswordStrength(password);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) newErrors.fullName = 'Full Name is required';

    if (!email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!phone.trim() || phone === '+254') {
      newErrors.phone = 'Mobile Phone Number is required';
    } else if (!/^\+254\d{9}$/.test(phone.trim())) {
      newErrors.phone = 'Phone must be in format +254XXXXXXXXX';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!churchName.trim()) newErrors.churchName = 'Church Name is required';
    if (!pastorName.trim()) newErrors.pastorName = 'Pastor Full Name is required';
    if (!role) newErrors.role = 'Role Selection is required';
    if (role === 'other' && !otherRole.trim()) newErrors.otherRole = 'Please specify your role';

    if (!authorized) newErrors.authorized = 'Authorization confirmation is required';
    if (!termsAgree) newErrors.termsAgree = 'You must agree to the Terms and Conditions';
    if (!privacyAgree) newErrors.privacyAgree = 'You must agree to the Privacy Policy';
    if (!fundsAcknowledge) newErrors.fundsAcknowledge = 'You must acknowledge the funds control terms';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      setSubmitError('Please fix the validation errors before submitting.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        router.push('/auth/login');
      }, 2500);
    }, 1500);
  };

  return (
    <Box sx={{ minHeight: '100vh', background: 'linear-gradient(160deg,#1E0F05 0%,#2C1A0E 45%,#3A6B4A 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', p: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ width: '100%', maxWidth: 1200 }}>

        <Grid container spacing={4} sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>

          {/* Main Registration Form */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Card sx={{ background: '#FFFAF4' }}>
              <CardContent sx={{ p: { xs: 3, sm: 4, md: 5 } }}>

                {/* Branding/Header for form */}
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5, mb: 4 }}>
                  <Box sx={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg,#C2622A,#3A6B4A)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography sx={{ color: '#FDF6EE', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1.25rem' }}>S</Typography>
                  </Box>
                  <Typography sx={{ color: '#2C1A0E', fontFamily: '"Playfair Display",serif', fontWeight: 700, fontSize: '1.35rem' }}>ShepherdCare</Typography>
                </Box>

                <Typography variant="h4" sx={{ mb: 1, fontFamily: '"Playfair Display",serif', fontWeight: 700, color: '#2C1A0E', textAlign: 'center' }}>
                  Create Church Account
                </Typography>
                <Typography variant="body2" sx={{ color: '#6B4C35', mb: 4, fontFamily: '"Lora",serif', lineHeight: 1.6, textAlign: 'center' }}>
                  Create your church&apos;s Care for Shepherds workspace and begin supporting your pastor through transparent pastoral wellness fundraising.
                </Typography>

                {success && (
                  <Alert severity="success" sx={{ mb: 4, fontFamily: '"Lora",serif', fontSize: '0.9rem' }}>
                    Registration successful! Your church workspace has been initialized. Redirecting you to login...
                  </Alert>
                )}

                {submitError && (
                  <Alert severity="error" sx={{ mb: 4, fontFamily: '"Lora",serif', fontSize: '0.9rem' }}>
                    {submitError}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate>

                  {/* SECTION 1 — PERSONAL INFORMATION */}
                  <Typography variant="h6" sx={{ color: '#C2622A', mb: 2, fontFamily: '"Playfair Display",serif', fontWeight: 600 }}>
                    1. Personal Information
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Full Name"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        error={!!errors.fullName}
                        helperText={errors.fullName}
                        size="small"
                        slotProps={{ input: { startAdornment: <InputAdornment position="start"><PersonIcon sx={{ fontSize: 18, color: '#6B4C35' }} /></InputAdornment> } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Email Address"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                        size="small"
                        slotProps={{ input: { startAdornment: <InputAdornment position="start"><EmailIcon sx={{ fontSize: 18, color: '#6B4C35' }} /></InputAdornment> } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        required
                        label="Mobile Phone Number"
                        placeholder="+2547XXXXXXXX"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        error={!!errors.phone}
                        helperText={errors.phone || 'Enter your format with county code, e.g., +254712345678'}
                        size="small"
                        slotProps={{ input: { startAdornment: <InputAdornment position="start"><PhoneIcon sx={{ fontSize: 18, color: '#6B4C35' }} /></InputAdornment> } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Password"
                        type={showPw ? 'text' : 'password'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                        size="small"
                        slotProps={{
                          input: {
                            startAdornment: <InputAdornment position="start"><LockIcon sx={{ fontSize: 18, color: '#6B4C35' }} /></InputAdornment>,
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton size="small" onClick={() => setShowPw(!showPw)}>
                                  {showPw ? <VisibilityOffIcon sx={{ fontSize: 18 }} /> : <VisibilityIcon sx={{ fontSize: 18 }} />}
                                </IconButton>
                              </InputAdornment>
                            )
                          }
                        }}
                      />
                      {password && (
                        <Box sx={{ mt: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                            <Typography variant="caption" sx={{ color: '#6B4C35', fontFamily: '"Lora",serif' }}>Password strength:</Typography>
                            <Typography variant="caption" sx={{ fontWeight: 600, color: `${pwStrength.color}.main`, fontFamily: '"Lora",serif' }}>
                              {pwStrength.label}
                            </Typography>
                          </Box>
                          <LinearProgress variant="determinate" value={pwStrength.score} color={pwStrength.color} sx={{ height: 4, borderRadius: 2 }} />
                        </Box>
                      )}
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Confirm Password"
                        type={showConfirmPw ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        size="small"
                        slotProps={{
                          input: {
                            startAdornment: <InputAdornment position="start"><LockIcon sx={{ fontSize: 18, color: '#6B4C35' }} /></InputAdornment>,
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton size="small" onClick={() => setShowConfirmPw(!showConfirmPw)}>
                                  {showConfirmPw ? <VisibilityOffIcon sx={{ fontSize: 18 }} /> : <VisibilityIcon sx={{ fontSize: 18 }} />}
                                </IconButton>
                              </InputAdornment>
                            )
                          }
                        }}
                      />
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  {/* SECTION 2 — CHURCH INFORMATION */}
                  <Typography variant="h6" sx={{ color: '#C2622A', mb: 2, fontFamily: '"Playfair Display",serif', fontWeight: 600 }}>
                    2. Church Information
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        label="Church Name"
                        value={churchName}
                        onChange={e => setChurchName(e.target.value)}
                        error={!!errors.churchName}
                        helperText={errors.churchName}
                        size="small"
                        slotProps={{ input: { startAdornment: <InputAdornment position="start"><BusinessIcon sx={{ fontSize: 18, color: '#6B4C35' }} /></InputAdornment> } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Denomination (Optional)"
                        placeholder="e.g. Anglican, Baptist, Pentecostal..."
                        value={denomination}
                        onChange={e => setDenomination(e.target.value)}
                        size="small"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Church Registration Number (Optional)"
                        value={regNumber}
                        onChange={e => setRegNumber(e.target.value)}
                        size="small"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        label="Church Website (Optional)"
                        placeholder="e.g. www.mychurch.org"
                        value={website}
                        onChange={e => setWebsite(e.target.value)}
                        size="small"
                      />
                    </Grid>

                    {/* Location fields */}
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        fullWidth
                        disabled
                        label="Country"
                        value={country}
                        size="small"
                        slotProps={{ input: { startAdornment: <InputAdornment position="start"><MapIcon sx={{ fontSize: 18, color: '#6B4C35' }} /></InputAdornment> } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <FormControl fullWidth size="small">
                        <InputLabel id="county-label">County</InputLabel>
                        <Select
                          labelId="county-label"
                          label="County"
                          value={county}
                          onChange={e => setCounty(e.target.value)}
                        >
                          <MenuItem value=""><em>Select County</em></MenuItem>
                          {COUNTIES.map(c => (
                            <MenuItem key={c} value={c}>{c}</MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                      <TextField
                        fullWidth
                        label="City / Town"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        size="small"
                      />
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  {/* SECTION 3 — PASTOR INFORMATION */}
                  <Typography variant="h6" sx={{ color: '#C2622A', mb: 2, fontFamily: '"Playfair Display",serif', fontWeight: 600 }}>
                    3. Pastor Information
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        fullWidth
                        required
                        label="Pastor Full Name"
                        value={pastorName}
                        onChange={e => setPastorName(e.target.value)}
                        error={!!errors.pastorName}
                        helperText={errors.pastorName || "This information is used to initialize your church's Pastoral Wellness Fund."}
                        size="small"
                        slotProps={{ input: { startAdornment: <InputAdornment position="start"><PersonIcon sx={{ fontSize: 18, color: '#6B4C35' }} /></InputAdornment> } }}
                      />
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  {/* SECTION 4 — CONFIRM YOUR ROLE */}
                  <Typography variant="h6" sx={{ color: '#C2622A', mb: 1, fontFamily: '"Playfair Display",serif', fontWeight: 600 }}>
                    4. Confirm Your Role
                  </Typography>
                  <Typography variant="subtitle2" sx={{ color: '#2C1A0E', mb: 2, fontFamily: '"Lora",serif', fontWeight: 600 }}>
                    Who are you?
                  </Typography>
                  <FormControl error={!!errors.role} component="fieldset" sx={{ width: '100%', mb: 4 }}>
                    <RadioGroup
                      value={role}
                      onChange={e => {
                        setRole(e.target.value);
                        if (e.target.value !== 'other') setOtherRole('');
                      }}
                      sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 0.5 }}
                    >
                      {ROLES.map(r => (
                        <FormControlLabel
                          key={r.value}
                          value={r.value}
                          control={<Radio sx={{ color: '#C2622A', '&.Mui-checked': { color: '#C2622A' } }} />}
                          label={<Typography sx={{ fontFamily: '"Lora",serif', fontSize: '0.9rem' }}>{r.label}</Typography>}
                        />
                      ))}
                    </RadioGroup>
                    {errors.role && <FormHelperText>{errors.role}</FormHelperText>}

                    {role === 'other' && (
                      <TextField
                        required
                        fullWidth
                        label="Other Role"
                        value={otherRole}
                        onChange={e => setOtherRole(e.target.value)}
                        error={!!errors.otherRole}
                        helperText={errors.otherRole}
                        size="small"
                        sx={{ mt: 2 }}
                      />
                    )}
                  </FormControl>

                  <Divider sx={{ my: 3 }} />

                  {/* SECTION 5 — AUTHORIZATION CONFIRMATION */}
                  <Typography variant="h6" sx={{ color: '#C2622A', mb: 2, fontFamily: '"Playfair Display",serif', fontWeight: 600 }}>
                    5. Authorization Confirmation
                  </Typography>
                  <Card sx={{ background: 'rgba(194,98,42,0.06)', border: '1px solid rgba(194,98,42,0.2)', mb: 3 }}>
                    <CardContent sx={{ p: 2.5, display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <InfoOutlinedIcon sx={{ color: '#C2622A', mt: 0.2 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 700, color: '#2C1A0E', fontSize: '0.88rem', fontFamily: '"Lora",serif', mb: 0.5 }}>
                          Authorized Representatives Only
                        </Typography>
                        <Typography sx={{ color: '#6B4C35', fontSize: '0.82rem', fontFamily: '"Lora",serif', lineHeight: 1.5 }}>
                          To ensure accountability and prevent unauthorized registrations, Care for Shepherds requires all church workspaces to be created by authorized representatives (pastors, board members, administrators, or finance officers) of the church.
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={authorized}
                        onChange={e => setAuthorized(e.target.checked)}
                        sx={{ color: '#C2622A', '&.Mui-checked': { color: '#C2622A' } }}
                      />
                    }
                    label={
                      <Typography sx={{ fontFamily: '"Lora",serif', fontSize: '0.88rem', fontWeight: 600, color: '#2C1A0E' }}>
                        I confirm that I am authorized by this church to create and manage this Care for Shepherds account. *
                      </Typography>
                    }
                    sx={{ mb: 4, display: 'flex', alignItems: 'flex-start' }}
                  />
                  {errors.authorized && (
                    <Typography variant="caption" color="error" sx={{ display: 'block', mt: -3, mb: 4, ml: 4, fontFamily: '"Lora",serif' }}>
                      {errors.authorized}
                    </Typography>
                  )}

                  <Divider sx={{ my: 3 }} />

                  {/* SECTION 6 — ACCOUNT VERIFICATION */}
                  <Typography variant="h6" sx={{ color: '#C2622A', mb: 1, fontFamily: '"Playfair Display",serif', fontWeight: 600 }}>
                    6. Verify Your Identity
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#6B4C35', mb: 3, fontFamily: '"Lora",serif', lineHeight: 1.5 }}>
                    To protect churches and ensure fundraising transparency, every administrator must verify their identity.
                  </Typography>

                  <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Box sx={{ p: 2.5, border: '1px solid rgba(194,98,42,0.15)', borderRadius: 2, background: '#FFFAF4', position: 'relative' }}>
                        <Typography sx={{ fontWeight: 700, fontFamily: '"Lora",serif', color: '#2C1A0E', fontSize: '0.9rem', mb: 1 }}>
                          Email Verification
                        </Typography>
                        <Typography sx={{ color: '#6B4C35', fontSize: '0.8rem', fontFamily: '"Lora",serif', mb: 2, lineHeight: 1.5 }}>
                          A verification link will be sent to your email address once your registration completes.
                        </Typography>
                        <Chip label="Pending Verification" size="small" variant="outlined" sx={{ borderColor: 'rgba(194,98,42,0.4)', color: '#C2622A', fontSize: '0.7rem' }} />
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <Box sx={{ p: 2.5, border: '1px solid rgba(194,98,42,0.15)', borderRadius: 2, background: '#FFFAF4', position: 'relative' }}>
                        <Typography sx={{ fontWeight: 700, fontFamily: '"Lora",serif', color: '#2C1A0E', fontSize: '0.9rem', mb: 1 }}>
                          Phone Verification (OTP)
                        </Typography>
                        <Typography sx={{ color: '#6B4C35', fontSize: '0.8rem', fontFamily: '"Lora",serif', mb: 2, lineHeight: 1.5 }}>
                          Receive a 6-digit one-time PIN (OTP) code on your mobile device via SMS.
                        </Typography>
                        <Chip label="Enabled" size="small" sx={{ background: '#EAF3DE', color: '#244530', fontSize: '0.7rem' }} />
                      </Box>
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <Box sx={{ p: 2.5, border: '1px dashed rgba(107,76,53,0.3)', borderRadius: 2, background: 'rgba(107,76,53,0.02)' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <VerifiedUserIcon sx={{ color: '#6B4C35', fontSize: 18 }} />
                          <Typography sx={{ fontWeight: 700, fontFamily: '"Lora",serif', color: '#2C1A0E', fontSize: '0.9rem' }}>
                            Church Authorization Verification (Future Release)
                          </Typography>
                        </Box>
                        <Typography sx={{ color: '#6B4C35', fontSize: '0.8rem', fontFamily: '"Lora",serif', lineHeight: 1.5 }}>
                          This feature will allow churches to upload proof of authorization (such as certificate of registration or denomination letter) in a future release.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  {/* SECTION 7 — SUBSCRIPTION */}
                  <Typography variant="h6" sx={{ color: '#C2622A', mb: 2, fontFamily: '"Playfair Display",serif', fontWeight: 600 }}>
                    7. Subscription Plan
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {PLANS.map(p => {
                      const isSelected = selectedPlan === p.id;
                      return (
                        <Grid size={{ xs: 12, sm: 6 }} key={p.id}>
                          <Box
                            onClick={() => setSelectedPlan(p.id)}
                            sx={{
                              p: 2.5,
                              borderRadius: 3,
                              border: isSelected ? '2px solid #C2622A' : '1px solid rgba(194,98,42,0.15)',
                              background: isSelected ? '#FAECE7' : '#FFFAF4',
                              cursor: 'pointer',
                              transition: 'all 0.2s',
                              position: 'relative',
                              height: '100%',
                              display: 'flex',
                              flexDirection: 'column',
                              '&:hover': {
                                borderColor: '#C2622A',
                                boxShadow: '0 4px 12px rgba(44,26,14,0.06)'
                              }
                            }}
                          >
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
                              <Typography sx={{ fontWeight: 700, color: '#2C1A0E', fontFamily: '"Playfair Display",serif', fontSize: '1rem' }}>
                                {p.name}
                              </Typography>
                              {isSelected && <CheckCircleIcon sx={{ color: '#C2622A', fontSize: 20 }} />}
                            </Box>

                            <Box sx={{ mb: 1.5 }}>
                              <Typography sx={{ fontWeight: 700, color: '#C2622A', fontSize: '1.25rem', fontFamily: '"Playfair Display",serif', display: 'inline' }}>
                                {p.price}
                              </Typography>
                              <Typography sx={{ color: '#6B4C35', fontSize: '0.78rem', fontFamily: '"Lora",serif', display: 'inline', ml: 0.5 }}>
                                {p.period}
                              </Typography>
                            </Box>

                            <Typography sx={{ color: '#6B4C35', fontSize: '0.78rem', fontFamily: '"Lora",serif', lineHeight: 1.5, flexGrow: 1 }}>
                              {p.desc}
                            </Typography>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>

                  <Divider sx={{ my: 3 }} />

                  {/* SECTION 8 — TERMS & CONDITIONS */}
                  <Typography variant="h6" sx={{ color: '#C2622A', mb: 2, fontFamily: '"Playfair Display",serif', fontWeight: 600 }}>
                    8. Terms & Conditions
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={termsAgree}
                          onChange={e => setTermsAgree(e.target.checked)}
                          sx={{ color: '#C2622A', '&.Mui-checked': { color: '#C2622A' } }}
                        />
                      }
                      label={
                        <Typography sx={{ fontFamily: '"Lora",serif', fontSize: '0.85rem', color: '#2C1A0E' }}>
                          I agree to the <Box component="span" sx={{ color: '#C2622A', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Terms and Conditions</Box>. *
                        </Typography>
                      }
                    />
                    {errors.termsAgree && (
                      <Typography variant="caption" color="error" sx={{ mt: -1, ml: 4, fontFamily: '"Lora",serif' }}>
                        {errors.termsAgree}
                      </Typography>
                    )}

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={privacyAgree}
                          onChange={e => setPrivacyAgree(e.target.checked)}
                          sx={{ color: '#C2622A', '&.Mui-checked': { color: '#C2622A' } }}
                        />
                      }
                      label={
                        <Typography sx={{ fontFamily: '"Lora",serif', fontSize: '0.85rem', color: '#2C1A0E' }}>
                          I agree to the <Box component="span" sx={{ color: '#C2622A', fontWeight: 600, textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</Box>. *
                        </Typography>
                      }
                    />
                    {errors.privacyAgree && (
                      <Typography variant="caption" color="error" sx={{ mt: -1, ml: 4, fontFamily: '"Lora",serif' }}>
                        {errors.privacyAgree}
                      </Typography>
                    )}

                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={fundsAcknowledge}
                          onChange={e => setFundsAcknowledge(e.target.checked)}
                          sx={{ color: '#C2622A', '&.Mui-checked': { color: '#C2622A' } }}
                        />
                      }
                      label={
                        <Typography sx={{ fontFamily: '"Lora",serif', fontSize: '0.85rem', color: '#2C1A0E' }}>
                          I understand that Care for Shepherds does not hold church funds and that all fundraising remains under my church&apos;s control. *
                        </Typography>
                      }
                      sx={{ display: 'flex', alignItems: 'flex-start' }}
                    />
                    {errors.fundsAcknowledge && (
                      <Typography variant="caption" color="error" sx={{ mt: -1, ml: 4, fontFamily: '"Lora",serif' }}>
                        {errors.fundsAcknowledge}
                      </Typography>
                    )}
                  </Box>

                  <Divider sx={{ my: 3 }} />

                  {/* SUBMIT SECTION */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      disabled={loading || !authorized || !termsAgree || !privacyAgree || !fundsAcknowledge}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ py: 1.5, fontSize: '1rem', fontWeight: 700 }}
                    >
                      {loading ? 'Registering Workspace...' : 'Create Church Account'}
                    </Button>

                    <Button
                      component={Link}
                      href="/auth/login"
                      variant="outlined"
                      fullWidth
                      size="large"
                      startIcon={<ArrowBackIcon />}
                      sx={{ py: 1.5, fontSize: '0.9rem', color: '#6B4C35', borderColor: 'rgba(194,98,42,0.3)', '&:hover': { borderColor: '#C2622A', background: 'transparent' } }}
                    >
                      Back to Login
                    </Button>

                    <Typography variant="body2" sx={{ textAlign: 'center', color: '#6B4C35', mt: 1, fontFamily: '"Lora",serif' }}>
                      Already have an account?{' '}
                      <Box component={Link} href="/auth/login" sx={{ color: '#C2622A', fontWeight: 700, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                        Login
                      </Box>
                    </Typography>
                  </Box>

                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* RIGHT-SIDE INFORMATION PANEL (Desktop) */}
          {/* <Grid size={{ xs: 12, md: 4 }}>
            <Card sx={{ background: 'rgba(255,248,242,0.06)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,248,242,0.12)', color: '#FDF6EE' }}>
              <CardContent sx={{ p: { xs: 3, sm: 4 } }}>
                <Typography variant="h5" sx={{ mb: 3, fontFamily: '"Playfair Display",serif', fontWeight: 700, color: '#FDF6EE' }}>
                  Why Join Care for Shepherds?
                </Typography>

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mb: 4 }}>
                  {[
                    { title: 'Dedicated Pastoral Wellness Fund', desc: 'Separate your wellness fundraising operationally and legally from general church finances.' },
                    { title: 'Transparent Fundraising', desc: 'A real-time public fund ledger that shows exactly how wellness funds are collected and approved.' },
                    { title: 'M-Pesa Giving', desc: 'Congregation members give easily via M-Pesa STK push. No apps or bank registrations required.' },
                    { title: 'Accountability & Public Ledger', desc: 'All transactions appear on a secure ledger. Disbursements require dual authorizations.' },
                    { title: 'Campaign Progress Tracking', desc: 'Initialize standard or customized retreats, sabbaticals, and counseling goals with progression bars.' },
                    { title: 'Secure Church Workspace', desc: 'Role-based access controls for pastors, administrators, finance officers, and denominations.' },
                  ].map(f => (
                    <Box key={f.title} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <CheckCircleIcon sx={{ color: '#C2622A', fontSize: 18, mt: 0.3 }} />
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.88rem', fontFamily: '"Lora",serif', color: '#FDF6EE', mb: 0.5 }}>
                          {f.title}
                        </Typography>
                        <Typography sx={{ color: 'rgba(253,246,238,0.65)', fontSize: '0.78rem', fontFamily: '"Lora",serif', lineHeight: 1.5 }}>
                          {f.desc}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ borderColor: 'rgba(253,246,238,0.15)', my: 3 }} />

                <Typography variant="body2" sx={{ textAlign: 'center', fontStyle: 'italic', color: 'rgba(253,246,238,0.5)', fontFamily: '"Lora",serif' }}>
                  &ldquo;Helping churches care for the shepherds who care for them.&rdquo;
                </Typography>
              </CardContent>
            </Card> */}
          {/* </Grid> */}

        </Grid>
      </Box>
    </Box>
  );
}
