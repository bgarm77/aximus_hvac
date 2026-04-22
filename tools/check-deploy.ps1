try {
  $r = Invoke-WebRequest -Uri https://www.aximushvac.com/images/home/hero.webp -UseBasicParsing -TimeoutSec 20
  Write-Host ("Status=" + $r.StatusCode)
  Write-Host ("Size=" + $r.RawContentLength)
  Write-Host ("X-Vercel-Cache=" + $r.Headers['x-vercel-cache'])
  Write-Host ("Age=" + $r.Headers['age'])
  Write-Host ("Last-Modified=" + $r.Headers['last-modified'])
} catch {
  Write-Host $_.Exception.Message
}
