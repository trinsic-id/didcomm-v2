//
//  DIDKey.h
//  DIDComm-gRPC
//
//  Created by Tomislav Markovski on 11/22/20.
//

#import <Foundation/Foundation.h>
#import "Keys.pbobjc.h"

@interface DIDKey : NSObject

+ (GenerateKeyResponse *_Nullable)generate:(GenerateKeyRequest *_Nonnull)request
                                 withError:(NSError *_Nullable*_Nullable)error;

+ (ResolveResponse *_Nullable)resolve:(ResolveRequest *_Nonnull)request
                               withError:(NSError *_Nullable*_Nullable)error;

@end
