import hashlib
import string
import random

class URLShortener:
    def __init__(self):
        self.url_mapping = {}
        self.base_url = "https://short.url/"
        self.short_length = 6  # Length of the short code
        
    def shorten_url(self, long_url):
        # Generate a unique short code
        short_code = self._generate_short_code(long_url)
        
        # Store the mapping
        self.url_mapping[short_code] = long_url
        
        # Return the shortened URL
        return self.base_url + short_code
    
    def _generate_short_code(self, long_url):
        # Create a hash of the URL
        url_hash = hashlib.md5(long_url.encode()).hexdigest()
        
        # Take the first part of the hash and mix with random characters
        hash_part = url_hash[:self.short_length//2]
        random_part = ''.join(random.choices(string.ascii_letters + string.digits, 
                                           k=self.short_length - len(hash_part)))
        
        # Combine and shuffle
        combined = hash_part + random_part
        return ''.join(random.sample(combined, len(combined)))
    
    def get_long_url(self, short_code):
        return self.url_mapping.get(short_code, None)

# Example usage
if __name__ == "__main__":
    shortener = URLShortener()
    
    # Long URL to shorten
    long_url = "https://chat.deepseek.com/a/chat/s/23a10551-f049-4cef-9409-34a89617ef31"
    
    # Shorten the URL
    short_url = shortener.shorten_url(long_url)
    print(f"Short URL: {short_url}")
    
    # Retrieve original URL
    short_code = short_url.split('/')[-1]
    original_url = shortener.get_long_url(short_code)
    print(f"Original URL: {original_url}")
