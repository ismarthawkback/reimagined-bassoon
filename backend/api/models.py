from django.db import models

# Create your models here.





class AstConfbridge(models.Model):
    confname = models.CharField(unique=True, max_length=40)
    name = models.CharField(max_length=40, blank=True, null=True)
    secret = models.CharField(max_length=40, blank=True, null=True)
    extension = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ast_ConfBridge'


class AstAccbar(models.Model):
    name = models.CharField(unique=True, max_length=10)
    context = models.CharField(max_length=40, blank=True, null=True)
    secret = models.CharField(max_length=40, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ast_accbar'


class AstCdr(models.Model):
    start = models.DateTimeField()
    answer = models.DateTimeField()
    end = models.DateTimeField()
    clid = models.CharField(max_length=80)
    src = models.CharField(max_length=80)
    dst = models.CharField(max_length=80)
    dcontext = models.CharField(max_length=80)
    channel = models.CharField(max_length=80)
    dstchannel = models.CharField(max_length=80)
    lastapp = models.CharField(max_length=80)
    lastdata = models.CharField(max_length=80)
    duration = models.IntegerField()
    billsec = models.IntegerField()
    disposition = models.CharField(max_length=45)
    amaflags = models.IntegerField()
    accountcode = models.CharField(max_length=20)
    uniqueid = models.CharField(max_length=32)
    userfield = models.CharField(max_length=255)
    peeraccount = models.CharField(max_length=20)
    linkedid = models.CharField(max_length=32)
    sequence = models.IntegerField()
    route_rate = models.CharField(max_length=10)

    class Meta:
        managed = False
        db_table = 'ast_cdr'


class AstSipcontacts(models.Model):
    name = models.CharField(unique=True, max_length=10)
    useragent = models.CharField(max_length=20, blank=True, null=True)
    lastms = models.IntegerField(blank=True, null=True)
    ipaddr = models.CharField(max_length=45, blank=True, null=True)
    port = models.IntegerField(blank=True, null=True)
    regseconds = models.IntegerField(blank=True, null=True)
    defaultuser = models.CharField(max_length=10, blank=True, null=True)
    fullcontact = models.CharField(max_length=35, blank=True, null=True)
    regserver = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ast_sipcontacts'


class AstSipfriends(models.Model):
    name = models.CharField(unique=True, max_length=10)
    ipaddr = models.CharField(max_length=45, blank=True, null=True)
    port = models.IntegerField(blank=True, null=True)
    regseconds = models.IntegerField(blank=True, null=True)
    defaultuser = models.CharField(max_length=10, blank=True, null=True)
    fullcontact = models.CharField(max_length=80, blank=True, null=True)
    regserver = models.CharField(max_length=20, blank=True, null=True)
    useragent = models.CharField(max_length=20, blank=True, null=True)
    lastms = models.IntegerField(blank=True, null=True)
    host = models.CharField(max_length=40, blank=True, null=True)
    type = models.CharField(max_length=6, blank=True, null=True)
    context = models.CharField(max_length=40, blank=True, null=True)
    permit = models.CharField(max_length=95, blank=True, null=True)
    deny = models.CharField(max_length=95, blank=True, null=True)
    secret = models.CharField(max_length=40, blank=True, null=True)
    md5secret = models.CharField(max_length=40, blank=True, null=True)
    remotesecret = models.CharField(max_length=40, blank=True, null=True)
    transport = models.CharField(max_length=7, blank=True, null=True)
    dtmfmode = models.CharField(max_length=9, blank=True, null=True)
    directmedia = models.CharField(max_length=6, blank=True, null=True)
    nat = models.CharField(max_length=29, blank=True, null=True)
    callgroup = models.CharField(max_length=40, blank=True, null=True)
    pickupgroup = models.CharField(max_length=40, blank=True, null=True)
    language = models.CharField(max_length=40, blank=True, null=True)
    disallow = models.CharField(max_length=40, blank=True, null=True)
    allow = models.CharField(max_length=40, blank=True, null=True)
    insecure = models.CharField(max_length=40, blank=True, null=True)
    trustrpid = models.CharField(max_length=3, blank=True, null=True)
    progressinband = models.CharField(max_length=5, blank=True, null=True)
    promiscredir = models.CharField(max_length=3, blank=True, null=True)
    useclientcode = models.CharField(max_length=3, blank=True, null=True)
    accountcode = models.CharField(max_length=40, blank=True, null=True)
    setvar = models.CharField(max_length=40, blank=True, null=True)
    callerid = models.CharField(max_length=40, blank=True, null=True)
    amaflags = models.CharField(max_length=40, blank=True, null=True)
    callcounter = models.CharField(max_length=3, blank=True, null=True)
    cc_agent_policy = models.CharField(max_length=7, blank=True, null=True)
    cc_monitor_policy = models.CharField(max_length=7, blank=True, null=True)
    busylevel = models.IntegerField(blank=True, null=True)
    allowoverlap = models.CharField(max_length=3, blank=True, null=True)
    allowsubscribe = models.CharField(max_length=3, blank=True, null=True)
    videosupport = models.CharField(max_length=3, blank=True, null=True)
    maxcallbitrate = models.IntegerField(blank=True, null=True)
    rfc2833compensate = models.CharField(max_length=3, blank=True, null=True)
    mailbox = models.CharField(max_length=40, blank=True, null=True)
    # Field renamed to remove unsuitable characters.
    session_timers = models.CharField(
        db_column='session-timers', max_length=9, blank=True, null=True)
    # Field renamed to remove unsuitable characters.
    session_expires = models.IntegerField(
        db_column='session-expires', blank=True, null=True)
    # Field renamed to remove unsuitable characters.
    session_minse = models.IntegerField(
        db_column='session-minse', blank=True, null=True)
    # Field renamed to remove unsuitable characters.
    session_refresher = models.CharField(
        db_column='session-refresher', max_length=3, blank=True, null=True)
    t38pt_usertpsource = models.CharField(max_length=40, blank=True, null=True)
    regexten = models.CharField(max_length=40, blank=True, null=True)
    fromdomain = models.CharField(max_length=40, blank=True, null=True)
    fromuser = models.CharField(max_length=40, blank=True, null=True)
    qualify = models.CharField(max_length=40, blank=True, null=True)
    defaultip = models.CharField(max_length=45, blank=True, null=True)
    rtptimeout = models.IntegerField(blank=True, null=True)
    rtpholdtimeout = models.IntegerField(blank=True, null=True)
    sendrpid = models.CharField(max_length=3, blank=True, null=True)
    outboundproxy = models.CharField(max_length=40, blank=True, null=True)
    callbackextension = models.CharField(max_length=40, blank=True, null=True)
    timert1 = models.IntegerField(blank=True, null=True)
    timerb = models.IntegerField(blank=True, null=True)
    qualifyfreq = models.IntegerField(blank=True, null=True)
    constantssrc = models.CharField(max_length=3, blank=True, null=True)
    contactpermit = models.CharField(max_length=95, blank=True, null=True)
    contactdeny = models.CharField(max_length=95, blank=True, null=True)
    usereqphone = models.CharField(max_length=3, blank=True, null=True)
    textsupport = models.CharField(max_length=3, blank=True, null=True)
    faxdetect = models.CharField(max_length=3, blank=True, null=True)
    buggymwi = models.CharField(max_length=3, blank=True, null=True)
    auth = models.CharField(max_length=40, blank=True, null=True)
    fullname = models.CharField(max_length=40, blank=True, null=True)
    trunkname = models.CharField(max_length=40, blank=True, null=True)
    cid_number = models.CharField(max_length=40, blank=True, null=True)
    callingpres = models.CharField(max_length=21, blank=True, null=True)
    mohinterpret = models.CharField(max_length=40, blank=True, null=True)
    mohsuggest = models.CharField(max_length=40, blank=True, null=True)
    parkinglot = models.CharField(max_length=40, blank=True, null=True)
    hasvoicemail = models.CharField(max_length=3, blank=True, null=True)
    subscribemwi = models.CharField(max_length=3, blank=True, null=True)
    vmexten = models.CharField(max_length=40, blank=True, null=True)
    autoframing = models.CharField(max_length=3, blank=True, null=True)
    rtpkeepalive = models.IntegerField(blank=True, null=True)
    # Field renamed to remove unsuitable characters.
    call_limit = models.IntegerField(
        db_column='call-limit', blank=True, null=True)
    g726nonstandard = models.CharField(max_length=3, blank=True, null=True)
    ignoresdpversion = models.CharField(max_length=3, blank=True, null=True)
    allowtransfer = models.CharField(max_length=3, blank=True, null=True)
    dynamic = models.CharField(max_length=3, blank=True, null=True)
    acl = models.CharField(max_length=15, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ast_sipfriends'


# class AstVoicemailUsers(models.Model):
#     customer_id = models.CharField(max_length=11)
#     context = models.CharField(max_length=50)
#     mailbox = models.CharField(max_length=11)
#     password = models.CharField(max_length=10)
#     fullname = models.CharField(max_length=150)
#     email = models.CharField(max_length=50)
#     pager = models.CharField(max_length=50)
#     tz = models.CharField(max_length=10)
#     attach = models.CharField(max_length=4)
#     saycid = models.CharField(max_length=4)
#     dialout = models.CharField(max_length=10)
#     callback = models.CharField(max_length=10)
#     review = models.CharField(max_length=4)
#     operator = models.CharField(max_length=4)
#     envelope = models.CharField(max_length=4)
#     sayduration = models.CharField(max_length=4)
#     saydurationm = models.IntegerField()
#     sendvoicemail = models.CharField(max_length=4)
#     delete = models.CharField(max_length=4)
#     nextaftercmd = models.CharField(max_length=4)
#     forcename = models.CharField(max_length=4)
#     forcegreetings = models.CharField(max_length=4)
#     hidefromdir = models.CharField(max_length=4)
#     stamp = models.DateTimeField()

#     class Meta:
#         managed = False
#         db_table = 'ast_voicemail_users'


class VoicemailUsers(models.Model):
    uniqueid = models.AutoField(primary_key=True)
    customer_id = models.CharField(max_length=11)
    context = models.CharField(max_length=50)
    mailbox = models.CharField(max_length=11)
    password = models.CharField(max_length=10)
    fullname = models.CharField(max_length=150)
    email = models.CharField(max_length=50)
    pager = models.CharField(max_length=50)
    tz = models.CharField(max_length=10)
    attach = models.CharField(max_length=4)
    saycid = models.CharField(max_length=4)
    dialout = models.CharField(max_length=10)
    callback = models.CharField(max_length=10)
    review = models.CharField(max_length=4)
    operator = models.CharField(max_length=4)
    envelope = models.CharField(max_length=4)
    sayduration = models.CharField(max_length=4)
    saydurationm = models.IntegerField()
    sendvoicemail = models.CharField(max_length=4)
    delete = models.CharField(max_length=4)
    nextaftercmd = models.CharField(max_length=4)
    forcename = models.CharField(max_length=4)
    forcegreetings = models.CharField(max_length=4)
    hidefromdir = models.CharField(max_length=4)
    stamp = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'voicemail_users'
