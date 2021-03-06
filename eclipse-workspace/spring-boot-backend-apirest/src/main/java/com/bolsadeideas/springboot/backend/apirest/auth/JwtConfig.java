package com.bolsadeideas.springboot.backend.apirest.auth;

public class JwtConfig {
	public static final String LLAVE_SECRETA = "alguna.clave.secreta.12345678";
	
	public static final String RSA_PRIVADA = "-----BEGIN RSA PRIVATE KEY-----\r\n" + 
			"MIIEowIBAAKCAQEAv6BeUzOhLASqN4bfCGjZqYXJf4TrKlx81jw/xFsW8XLVkNGj\r\n" + 
			"PyYofL2873RomVfrQS95tRJhQ1XzL4i2oiFaubEu0Bc2qm0PrkrZQdRNTs5V+/03\r\n" + 
			"Ex1eg6VtFMMr7XPwbUD5NDcv4R6LLVXGI9947J7Kk8MY0T2Rs44g925Li+Bsd63Y\r\n" + 
			"aUiEKMD0rvdTLyL51fooWU//bAdqJCNlreXGH9xlIskV4oiCLHU0jRaahzM35+N0\r\n" + 
			"Xp9Bl88WCfcWhEegxfF9I2Yl3WTDxgvgGywgpPT6hLAEx+F4BBfNaihNEjCMc6OW\r\n" + 
			"pTcQo83vBSqFPF5zC+mU9Sj0Xt3x0TlTi1ufvwIDAQABAoIBAGq01JGkOGWYm2ic\r\n" + 
			"M+os6Lfbhh76VzGZmvJ5TlD7IEWHWqFv+2WYzAbaaTE2M2DgcmI0G6PW/k5OuEKJ\r\n" + 
			"8JlL1Yd9wMGji49Pd+HoUB62J+5wO7U8hcShIBZSsfFT1Uw+uW09Nwf6izDin0G5\r\n" + 
			"d8JWGLI6ojex9knd7Rp9VKIzyuGyOewPghYruGrYrRMyPTztbazmTf2WhQOjLeCX\r\n" + 
			"s2tauKEbpeLbJdpq5MCHFf3QAUVENTkDGiTHcSjEoXvoC4g+p/wYcCQ328yv1/lJ\r\n" + 
			"8FQYoZWKDq9jwT8XgQOHwmga8U/kgoHdso3+94zxEc2/Not73i9F0bKzRH11GNmn\r\n" + 
			"1EgnYoECgYEA6cqks+9ejzSsdzbB0rbIknEUVzyLsyRYOYdTCM//wTJlNz+Q9XqM\r\n" + 
			"KeoOSr7ZrNZgOfoT63nt/xCrwlvV2olOUJJ5n/De5Z/61aIjI0mErwCGC0Eu1nE1\r\n" + 
			"idsmhIjRQ3CXC0VxedRbRK80IZHUji9VE0ipWWGtmi0TQbfVs267j18CgYEA0dRZ\r\n" + 
			"1x5iraaHuwv9GXEb8H12wGAtCh1lv2/A405YeUNae0WaMHH4OdGpEuDXZuYAG6Y6\r\n" + 
			"lllBDP0zDWppaDMwiFe3z02pacOVFLpg2TqW606EmEwk0aqbJmlq6Jv+6Dh9hs3B\r\n" + 
			"DuohInov8XWEbetyVSXzKSbF3qhqcSSCjB6eq6ECgYAGsFCEAV4wNK6Wfo+PCsG0\r\n" + 
			"Rt3xHP9WMb0AcFm0z9aeXWW97eikzUvDSzn7c3hg1IVOQ1RckVF40a5IUj5NEU6X\r\n" + 
			"SYmHROnroecYQ5pDwS+1ngs3uTaw1e5VMlrowc1S456+qM71UFkIHwcbysNNChei\r\n" + 
			"BJsrvnqsBYwefjbz+kANewKBgQCB+dw82OGfV4y0XNTHMb1w1wb8W5cKsPMaBouh\r\n" + 
			"QiKj2wjtW0wLvk1Y43qr6wMDBm4CspGQGHGnLiC1qrjohu0FR/DgROcwUKrEUD81\r\n" + 
			"0Ikz8UtJW8Fi7x90R9Cljhv0lSmMm19/caBczvtrwrPpsvL7s6pQT2g6aHCm7UrA\r\n" + 
			"qSb4gQKBgESlCfoA3H+Av0M6uRm+GOI68a18KjBMycyNChdhm9xOGAjlvb9nxM9N\r\n" + 
			"/m66NsZG7/QSfCvXIPaB/kGqJuYpbnluaAVVE5fSe0vqacBJBhvSOzsq+HUlCiId\r\n" + 
			"coJQSioBDtFZkdRaBQeUiyA8luV48KwAUqDZ/+3JZXhSadgM4bLJ\r\n" + 
			"-----END RSA PRIVATE KEY-----";
	
	public static final String RSA_PUBLICA = "-----BEGIN PUBLIC KEY-----\r\n" + 
			"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAv6BeUzOhLASqN4bfCGjZ\r\n" + 
			"qYXJf4TrKlx81jw/xFsW8XLVkNGjPyYofL2873RomVfrQS95tRJhQ1XzL4i2oiFa\r\n" + 
			"ubEu0Bc2qm0PrkrZQdRNTs5V+/03Ex1eg6VtFMMr7XPwbUD5NDcv4R6LLVXGI994\r\n" + 
			"7J7Kk8MY0T2Rs44g925Li+Bsd63YaUiEKMD0rvdTLyL51fooWU//bAdqJCNlreXG\r\n" + 
			"H9xlIskV4oiCLHU0jRaahzM35+N0Xp9Bl88WCfcWhEegxfF9I2Yl3WTDxgvgGywg\r\n" + 
			"pPT6hLAEx+F4BBfNaihNEjCMc6OWpTcQo83vBSqFPF5zC+mU9Sj0Xt3x0TlTi1uf\r\n" + 
			"vwIDAQAB\r\n" + 
			"-----END PUBLIC KEY-----";
}
