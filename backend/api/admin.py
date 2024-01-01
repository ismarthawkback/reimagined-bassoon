from django.contrib import admin

# Register your models here.
from api.models import *


admin.site.register(AstConfbridge)
admin.site.register(AstAccbar)
admin.site.register(AstCdr)
admin.site.register(AstSipcontacts)
admin.site.register(AstSipfriends)
# admin.site.register(AstVoicemailUsers)
# admin.site.register(VoicemailUsers)
